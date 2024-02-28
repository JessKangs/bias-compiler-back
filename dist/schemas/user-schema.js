"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addBiasBody = void 0;
var joi_1 = __importDefault(require("joi"));
exports.addBiasBody = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    nickname: joi_1["default"].string().required(),
    birthdate: joi_1["default"].date().required(),
    affiliations: joi_1["default"].string().required(),
    imageUrl: joi_1["default"].string().regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required()
});
