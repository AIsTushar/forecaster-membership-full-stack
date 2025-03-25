import express from "express";
import {
  changePassword,
  checkAuth,
  getUser,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check-auth", verifyToken, checkAuth);
router.get("/me", verifyToken, getUser);
router.put("/changePassword", verifyToken, changePassword);

export default router;
