"use strict";
exports.__esModule = true;
exports.authenticationRouter = void 0;
var express_1 = require("express");
var auth_joi_middleware_1 = require("../middlewares/auth-joi-middleware");
var authenticationController_1 = require("../controllers/authenticationController");
var authenticationRouter = (0, express_1.Router)();
exports.authenticationRouter = authenticationRouter;
authenticationRouter
    .post("/signup", auth_joi_middleware_1.signUpIsValid, authenticationController_1.createSignUp)
    .post("/signin", auth_joi_middleware_1.signInIsValid, authenticationController_1.createSignIn);
