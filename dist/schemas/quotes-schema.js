"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.addQuoteBody = void 0;
var joi_1 = __importDefault(require("joi"));
exports.addQuoteBody = joi_1["default"].object({
    quote: joi_1["default"].string().required(),
    context: joi_1["default"].string().required(),
    imageUrl: joi_1["default"].string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    url: joi_1["default"].string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    date: joi_1["default"].date().allow(null, ''),
    tag: joi_1["default"].string().valid('MENT', 'SONG', 'BUBBLE', 'OTHER').required()
});
