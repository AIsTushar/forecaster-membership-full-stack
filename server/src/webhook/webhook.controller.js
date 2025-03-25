import { PrismaClient } from "@prisma/client";
import stripe from "stripe";

const prisma = new PrismaClient();

export const webhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  try {
    // Construct the event using Stripe's verification
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        // Extract metadata
        const userId = session.metadata?.userId;
        const plan = session.metadata?.plan;

        const renewalDate = session.expires_at
          ? new Date(session.expires_at * 1000)
          : new Date();

        const currentPeriodStart = session.subscription.current_period_start
          ? new Date(session.subscription.current_period_start * 1000)
          : new Date();

        await prisma.membership.upsert({
          where: { userId },
          update: {
            tier: plan.toUpperCase(),
            status: "ACTIVE",
            renewalDate: renewalDate,
          },
          create: {
            userId,
            tier: plan.toUpperCase(),
            status: "ACTIVE",
            renewalDate: renewalDate,
            currentPeriodStart: currentPeriodStart,
            currentPeriodEnd: renewalDate,
          },
        });

        // Insert Transaction
        await prisma.transaction.create({
          data: {
            userId,
            amount: session.amount_total / 100,
            currency: session.currency.toUpperCase(),
            description: "Subscription payment for plan: " + plan.toUpperCase(),
            paymentGateway: "Stripe",
            gatewayTransactionId: session.id,
            status: "SUCCESSFUL",
          },
        });

        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};
