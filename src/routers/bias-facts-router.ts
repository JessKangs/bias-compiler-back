import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addFact, listFacts } from "../controllers/factsControler";

const biasFactsRouter = Router();

biasFactsRouter
.all("/*", authenticateToken)
.post("/:biasId/facts", addFact)
.get("/:biasId/facts", listFacts)

export { biasFactsRouter };