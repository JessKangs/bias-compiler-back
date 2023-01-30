import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addFact, listFacts } from "../controllers/factsControler";
import { isFactBodyValid } from "../middlewares/facts-joi-middleware";

const biasFactsRouter = Router();

biasFactsRouter
.all("/*", authenticateToken)
.post("/:biasId/facts", isFactBodyValid, addFact)
.get("/:biasId/facts", listFacts)

export { biasFactsRouter };