import { Router } from "express";
import { findUserById, findBiasesByUserId } from "../controllers/userController";
import { authenticateToken } from "../middlewares/authentication-middleware";

const userRouter = Router();

userRouter
.all("/*", authenticateToken)
.get("/profile/:userId", findUserById)
.get("/listBias/:userId", findBiasesByUserId)

export { userRouter };