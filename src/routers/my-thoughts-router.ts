import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addThought, listThoughts, listThoughtsByTitle } from "../controllers/thoughtsController";

const myThoughtsRouter = Router();

myThoughtsRouter
.all("/*", authenticateToken)
.post("/:biasId/thoughts", addThought)
.get("/:biasId/thoughts", listThoughts)
.get("/:biasId/:title/thoughts", listThoughtsByTitle)

export { myThoughtsRouter };