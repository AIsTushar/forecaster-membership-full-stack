import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./src/routes/auth.route.js";
import checkoutRoutes from "./src/routes/checkout.route.js";
import webhookRoutes from "./src/routes/webhook.route.js";

const app = express();
// Webhook API
app.use("/api/webhook", webhookRoutes);

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(cookieParser());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

// Authentication APIs
app.use("/api/auth", authRoutes);

// Stripe APIs
app.use("/api/checkout", checkoutRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
