"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.signInIsValid = exports.signUpIsValid = void 0;
var http_status_1 = __importDefault(require("http-status"));
var request_error_1 = require("../errors/request-error");
var auth_schema_1 = require("../schemas/auth-schema");
function signInIsValid(req, res, next) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email || !password)
        throw (0, request_error_1.requestError)(http_status_1["default"].BAD_REQUEST, "cannot login with empty body");
    var validation = auth_schema_1.loginSchema.validate({ email: email, password: password }, { abortEarly: true });
    if (validation.error) {
        res.status(http_status_1["default"].UNPROCESSABLE_ENTITY).send(validation.error);
    }
    else {
        next();
    }
}
exports.signInIsValid = signInIsValid;
function signUpIsValid(req, res, next) {
    var _a = req.body, nickname = _a.nickname, imageUrl = _a.imageUrl, email = _a.email, password = _a.password;
    var validation = auth_schema_1.signUpSchema.validate({ nickname: nickname, imageUrl: imageUrl, email: email, password: password }, { abortEarly: true });
}
exports.signUpIsValid = signUpIsValid;
