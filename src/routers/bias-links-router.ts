import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addLink, listLinks, listLinksByTag } from "../controllers/linksController";

const biasLinksRouter = Router();

biasLinksRouter
.all("/*", authenticateToken)
.post("/:biasId/links", addLink)
.get("/:biasId/links", listLinks)
.get("/:biasId/:tag/links", listLinksByTag)

export { biasLinksRouter };