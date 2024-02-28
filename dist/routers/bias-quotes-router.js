"use strict";
exports.__esModule = true;
exports.biasQuotesRouter = void 0;
var express_1 = require("express");
var authentication_middleware_1 = require("../middlewares/authentication-middleware");
var quotesController_1 = require("../controllers/quotesController");
var bias_quote_joi_middleware_1 = require("../middlewares/bias-quote-joi-middleware");
var biasQuotesRouter = (0, express_1.Router)();
exports.biasQuotesRouter = biasQuotesRouter;
biasQuotesRouter
    .all("/*", authentication_middleware_1.authenticateToken)
    .post("/:biasId/quote", bias_quote_joi_middleware_1.isQuoteBodyValid, quotesController_1.addQuote)
    .get("/:biasId/quotes", quotesController_1.listQuotes)
    .get("/:biasId/:tag/quotes", quotesController_1.listQuotesByTag);
