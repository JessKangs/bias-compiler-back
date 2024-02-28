"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isMemoryBodyValid = void 0;
var http_status_1 = __importDefault(require("http-status"));
var request_error_1 = require("../errors/request-error");
var memories_schema_1 = require("../schemas/memories-schema");
function isMemoryBodyValid(req, res, next) {
    var _a = req.body, title = _a.title, date = _a.date, memory = _a.memory, feelings = _a.feelings, url1 = _a.url1, url2 = _a.url2, url3 = _a.url3;
    var body = { title: title, date: date, memory: memory, feelings: feelings, url1: url1, url2: url2, url3: url3 };
    if (!title || !date || !memory || feelings.length === 0)
        throw (0, request_error_1.requestError)(http_status_1["default"].BAD_REQUEST, "cannot add memory with empty body");
    var validation = memories_schema_1.addMemoryBody.validate(body, { abortEarly: true });
    if (validation.error) {
        console.log(validation.error);
        res.status(http_status_1["default"].UNPROCESSABLE_ENTITY).send(validation.error);
    }
    else {
        next();
    }
}
exports.isMemoryBodyValid = isMemoryBodyValid;
