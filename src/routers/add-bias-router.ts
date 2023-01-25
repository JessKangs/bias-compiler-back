import { Router } from "express";
import { addBias } from "../controllers/addBiasController";
import { authenticateToken } from "../middlewares/authentication-middleware";

const addBiasRouter = Router();

addBiasRouter
.all("/*", authenticateToken)
.post("/firststeps/:userId", addBias)
.post("/addbias/:userId", addBias)

export { addBiasRouter };