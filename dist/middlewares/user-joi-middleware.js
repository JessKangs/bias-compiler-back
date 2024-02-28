"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.isAddBiasBodyValid = void 0;
var http_status_1 = __importDefault(require("http-status"));
var request_error_1 = require("../errors/request-error");
var user_schema_1 = require("../schemas/user-schema");
function isAddBiasBodyValid(req, res, next) {
    var _a = req.body, name = _a.name, nickname = _a.nickname, birthdate = _a.birthdate, affiliations = _a.affiliations, imageUrl = _a.imageUrl;
    var body = { name: name, nickname: nickname, birthdate: birthdate, affiliations: affiliations, imageUrl: imageUrl };
    if (!body)
        throw (0, request_error_1.requestError)(http_status_1["default"].BAD_REQUEST, "cannot add bias with empty body");
    var validation = user_schema_1.addBiasBody.validate(body, { abortEarly: true });
    if (validation.error) {
        res.status(http_status_1["default"].UNPROCESSABLE_ENTITY).send(validation.error);
    }
    else {
        next();
    }
}
exports.isAddBiasBodyValid = isAddBiasBodyValid;
