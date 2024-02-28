"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addFactBody = void 0;
var joi_1 = __importDefault(require("joi"));
exports.addFactBody = joi_1["default"].object({
    fact: joi_1["default"].string().required(),
    date: joi_1["default"].date().required()
});
