"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isLinkBodyValid = void 0;
var http_status_1 = __importDefault(require("http-status"));
var request_error_1 = require("../errors/request-error");
var links_schema_1 = require("../schemas/links-schema");
function isLinkBodyValid(req, res, next) {
    var _a = req.body, title = _a.title, site = _a.site, url = _a.url, tag = _a.tag;
    var body = { title: title, site: site, url: url, tag: tag };
    if (!body)
        throw (0, request_error_1.requestError)(http_status_1["default"].BAD_REQUEST, "cannot add link with empty body");
    var validation = links_schema_1.addLinkBody.validate(body, { abortEarly: true });
    if (validation.error) {
        res.status(http_status_1["default"].UNPROCESSABLE_ENTITY).send(validation.error);
    }
    else {
        next();
    }
}
exports.isLinkBodyValid = isLinkBodyValid;
