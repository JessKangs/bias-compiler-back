import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addMemory, listMemories, listMemoriesByTitle, listMemoriesByDate } from "../controllers/memoriesController";

const biasMemoriesRouter = Router();

biasMemoriesRouter
.all("/*", authenticateToken)
.post("/:biasId/memory", addMemory)
.get("/:biasId/memories", listMemories)
.get("/:biasId/:title/memories", listMemoriesByTitle)
.get("/:biasId/:date/memories", listMemoriesByDate)

export { biasMemoriesRouter };