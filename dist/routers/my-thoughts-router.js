"use strict";
exports.__esModule = true;
exports.myThoughtsRouter = void 0;
var express_1 = require("express");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
var thoughtsController_1 = require("../controllers/thoughtsController");
var myThoughtsRouter = (0, express_1.Router)();
exports.myThoughtsRouter = myThoughtsRouter;
myThoughtsRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/:biasId/thoughts", thoughtsController_1.addThought)
    .get("/:biasId/thoughts", thoughtsController_1.listThoughts)
    .get("/:biasId/:title/thoughts", thoughtsController_1.listThoughtsByTitle);
