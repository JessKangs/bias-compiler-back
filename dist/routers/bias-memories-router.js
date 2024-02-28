"use strict";
exports.__esModule = true;
exports.biasMemoriesRouter = void 0;
var express_1 = require("express");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
var memoriesController_1 = require("../controllers/memoriesController");
var memories_joi_middleware_1 = require("../middlewares/memories-joi-middleware");
var biasMemoriesRouter = (0, express_1.Router)();
exports.biasMemoriesRouter = biasMemoriesRouter;
biasMemoriesRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/:biasId/memory", memories_joi_middleware_1.isMemoryBodyValid, memoriesController_1.addMemory)
    .get("/:biasId/memories", memoriesController_1.listMemories)
    .get("/:biasId/:title/memories", memoriesController_1.listMemoriesByTitle)
    .get("/:biasId/:date/memories", memoriesController_1.listMemoriesByDate);
