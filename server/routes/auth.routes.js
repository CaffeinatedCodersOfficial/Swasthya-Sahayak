import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  resendOtp,
  resendResetOtp,
  resetPassword,
  sendResetOtp,
  verifyRegisterationOtp,
  verifyResetOtp,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/verify-registeration-otp", verifyRegisterationOtp);
authRouter.post("/resend-otp", resendOtp);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/resend-reset-otp", resendResetOtp);
authRouter.post("/verify-reset-otp", verifyResetOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.get("/is-auth", isAuth, isAuthenticated);

export default authRouter;
