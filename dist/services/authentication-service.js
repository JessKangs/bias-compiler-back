"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.authenticationService = void 0;
var repositories_1 = require("../repositories");
var bcrypt_1 = __importDefault(require("bcrypt"));
var errors_1 = require("../errors");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var http_status_1 = __importDefault(require("http-status"));
function criarRegistro(nickname, imageUrl, email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var userExists, hashedPassword, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repositories_1.authenticationRepository.findByEmail(email)];
                case 1:
                    userExists = _a.sent();
                    if (userExists)
                        throw (0, errors_1.conflictError)("conflict error");
                    return [4 /*yield*/, bcrypt_1["default"].hash(password, 12)];
                case 2:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, repositories_1.authenticationRepository.createUser(nickname, imageUrl, email, hashedPassword)];
                case 3:
                    user = _a.sent();
                    return [2 /*return*/, user];
            }
        });
    });
}
function login(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var user, isPasswordValid, token, session;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!email || !password)
                        throw (0, errors_1.requestError)(http_status_1["default"].BAD_REQUEST, "cannot login with empty body");
                    return [4 /*yield*/, repositories_1.authenticationRepository.findByEmail(email)];
                case 1:
                    user = _a.sent();
                    if (!user)
                        throw (0, errors_1.notFoundError)();
                    return [4 /*yield*/, bcrypt_1["default"].compare(password, user.password)];
                case 2:
                    isPasswordValid = _a.sent();
                    if (!isPasswordValid)
                        throw (0, errors_1.invalidCredentialsError)();
                    token = jsonwebtoken_1["default"].sign({ userId: user.id }, process.env.JWT_SECRET);
                    return [4 /*yield*/, repositories_1.authenticationRepository.upsertSession(user.id, token)];
                case 3:
                    session = _a.sent();
                    return [2 /*return*/, session];
            }
        });
    });
}
var authenticationService = {
    criarRegistro: criarRegistro,
    login: login
};
exports.authenticationService = authenticationService;
