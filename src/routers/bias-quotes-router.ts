import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addQuote, listQuotes, listQuotesByTag } from "../controllers/quotesController";
import { isQuoteBodyValid } from "../middlewares/bias-quote-joi-middleware";

const biasQuotesRouter = Router();

biasQuotesRouter
.all("/*", authenticateToken)
.post("/:biasId/quote", isQuoteBodyValid, addQuote)
.get("/:biasId/quotes", listQuotes)
.get("/:biasId/:tag/quotes", listQuotesByTag)

export { biasQuotesRouter };