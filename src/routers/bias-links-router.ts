import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addLink, listLinks, listLinksByTag } from "../controllers/linksController";
import { isLinkBodyValid } from "../middlewares/links-joi-middleware";

const biasLinksRouter = Router();

biasLinksRouter
.all("/*", authenticateToken)
.post("/:biasId/links", isLinkBodyValid, addLink)
.get("/:biasId/links", listLinks)
.get("/:biasId/:tag/links", listLinksByTag)

export { biasLinksRouter };