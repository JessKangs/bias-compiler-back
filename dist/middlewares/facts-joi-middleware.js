"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isFactBodyValid = void 0;
var http_status_1 = __importDefault(require("http-status"));
var request_error_1 = require("../errors/request-error");
var facts_schema_1 = require("../schemas/facts-schema");
function isFactBodyValid(req, res, next) {
    var _a = req.body, fact = _a.fact, date = _a.date;
    var body = { fact: fact, date: date };
    if (!body)
        throw (0, request_error_1.requestError)(http_status_1["default"].BAD_REQUEST, "cannot add fact with empty body");
    var validation = facts_schema_1.addFactBody.validate(body, { abortEarly: true });
    if (validation.error) {
        res.status(http_status_1["default"].UNPROCESSABLE_ENTITY).send(validation.error);
    }
    else {
        next();
    }
}
exports.isFactBodyValid = isFactBodyValid;
