"use strict";
exports.__esModule = true;
exports.userRouter = void 0;
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
var user_joi_middleware_1 = require("../middlewares/user-joi-middleware");
var userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/addbias/:userId", user_joi_middleware_1.isAddBiasBodyValid, userController_1.addBias)
    .get("/profile/:userId", userController_1.findUserById)
    .get("/listBias/:userId", userController_1.findBiasesByUserId);
