import express from "express";
import { isAuth } from "../middlewares/auth.middleware.js";
import { getUserData } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/user-data", isAuth, getUserData);

export default userRouter;
