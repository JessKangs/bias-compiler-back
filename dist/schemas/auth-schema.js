"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.signUpSchema = exports.loginSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.loginSchema = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].required()
});
exports.signUpSchema = joi_1["default"].object({
    nickname: joi_1["default"].string().required(),
    imageUrl: joi_1["default"].string().required(),
    email: joi_1["default"].string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi_1["default"].string().min(10)
});
