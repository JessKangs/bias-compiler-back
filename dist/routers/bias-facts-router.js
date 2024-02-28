"use strict";
exports.__esModule = true;
exports.biasFactsRouter = void 0;
var express_1 = require("express");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
var factsControler_1 = require("../controllers/factsControler");
var facts_joi_middleware_1 = require("../middlewares/facts-joi-middleware");
var biasFactsRouter = (0, express_1.Router)();
exports.biasFactsRouter = biasFactsRouter;
biasFactsRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/:biasId/facts", facts_joi_middleware_1.isFactBodyValid, factsControler_1.addFact)
    .get("/:biasId/facts", factsControler_1.listFacts);
