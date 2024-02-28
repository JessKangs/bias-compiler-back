"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addLinkBody = void 0;
var joi_1 = __importDefault(require("joi"));
exports.addLinkBody = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    site: joi_1["default"].string().required(),
    url: joi_1["default"].string().regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    tag: joi_1["default"].string().valid('VIDEO', 'PHOTO', 'TEXT', 'OTHER').required()
});
