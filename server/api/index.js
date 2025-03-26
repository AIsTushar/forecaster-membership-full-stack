import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "../src/routes/auth.route.js";
import checkoutRoutes from "../src/routes/checkout.route.js";
import webhookRoutes from "../src/routes/webhook.route.js";

const app = express();
// Webhook API
app.use("/api/webhook", webhookRoutes);

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://forecaster-membership-full-stack-e9bn.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials (cookies, headers, etc.)
  })
);

app.use(cookieParser());
dotenv.config();

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
