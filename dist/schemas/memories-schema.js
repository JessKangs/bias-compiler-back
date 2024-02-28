"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addMemoryBody = void 0;
var joi_1 = __importDefault(require("joi"));
exports.addMemoryBody = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    date: joi_1["default"].date().required(),
    memory: joi_1["default"].string().required(),
    feelings: joi_1["default"].array().required(),
    url1: joi_1["default"].string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    url2: joi_1["default"].string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    url3: joi_1["default"].string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
});
