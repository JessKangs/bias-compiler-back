"use strict";
exports.__esModule = true;
exports.biasLinksRouter = void 0;
var express_1 = require("express");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
var linksController_1 = require("../controllers/linksController");
var links_joi_middleware_1 = require("../middlewares/links-joi-middleware");
var biasLinksRouter = (0, express_1.Router)();
exports.biasLinksRouter = biasLinksRouter;
biasLinksRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/:biasId/links", links_joi_middleware_1.isLinkBodyValid, linksController_1.addLink)
    .get("/:biasId/links", linksController_1.listLinks)
    .get("/:biasId/:tag/links", linksController_1.listLinksByTag);
