"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isQuoteBodyValid = void 0;
var http_status_1 = __importDefault(require("http-status"));
var request_error_1 = require("../errors/request-error");
var quotes_schema_1 = require("../schemas/quotes-schema");
function isQuoteBodyValid(req, res, next) {
    var _a = req.body, quote = _a.quote, context = _a.context, imageUrl = _a.imageUrl, url = _a.url, date = _a.date, tag = _a.tag;
    var body = { quote: quote, context: context, imageUrl: imageUrl, url: url, date: date, tag: tag };
    if (!quote || !context || !date)
        throw (0, request_error_1.requestError)(http_status_1["default"].BAD_REQUEST, "cannot add quote with empty body");
    var validation = quotes_schema_1.addQuoteBody.validate(body, { abortEarly: true });
    if (validation.error) {
        res.status(http_status_1["default"].UNPROCESSABLE_ENTITY).send(validation.error);
    }
    else {
        next();
    }
}
exports.isQuoteBodyValid = isQuoteBodyValid;
