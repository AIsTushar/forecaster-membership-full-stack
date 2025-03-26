import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "../src/routes/auth.route.js";
import checkoutRoutes from "../src/routes/checkout.route.js";
import webhookRoutes from "../src/routes/webhook.route.js";

const app = express();
dotenv.config();

// Webhook API
app.use("/api/webhook", webhookRoutes);

app.use(express.json());

app.use(
  cors({
    origin: "https://forecaster-membership-full-stack-e9bn.vercel.app",
    credentials: true,
  })
);

app.use(cookieParser());

// Authentication APIs
app.use("/api/auth", authRoutes);

// Stripe APIs
app.use("/api/checkout", checkoutRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`);
// });

export default app;
