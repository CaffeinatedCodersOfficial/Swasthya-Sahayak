import express from "express";
import {
  login,
  register,
  resendOtp,
  verifyRegisterationOtp,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/verify-registeration-otp", verifyRegisterationOtp);
authRouter.post("/resend-otp", resendOtp);
authRouter.get("/is-auth", isAuth);

export default authRouter;
