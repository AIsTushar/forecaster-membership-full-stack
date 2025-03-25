import express from "express";
import { handler } from "../controllers/checkout.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, handler);

export default router;
