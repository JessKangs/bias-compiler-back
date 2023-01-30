import { Router } from "express";
import { findUserById, findBiasesByUserId, addBias } from "../controllers/userController";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { isAddBiasBodyValid } from "../middlewares/user-joi-middleware";

const userRouter = Router();

userRouter
.all("/*", authenticateToken)
.post("/addbias/:userId", isAddBiasBodyValid, addBias)
.get("/profile/:userId", findUserById)
.get("/listBias/:userId", findBiasesByUserId)

export { userRouter };