import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Map of Stripe price IDs to membership tiers
const PRICE_ID_TO_TIER = {
  price_1R6To3SAbk4HDuH1zj4PqiH9: "BASIC",
  price_1R6T5nSAbk4HDuH1COBIUlXO: "PREMIUM",
  price_1R6T70SAbk4HDuH1lQ3iZmhm: "ENTERPRISE",
};

export const handler = async (req, res) => {
  const userId = req.userId;
  try {
    const { priceId, title } = req.body;

    // Ensure priceId is provided
    if (!priceId) {
      return res.status(400).json({ error: "priceId is required" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        userId: userId,
        plan: title,
      },
    });

    // Send the sessionId to the frontend
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Error in checkout API:", error.message);
    res.status(500).json({ error: error.message });
  }
};
