import { Router } from "express";

import { authenticateToken } from "../middlewares/authentication-middleware";
import { addQuote, listQuotes, listQuotesByTag } from "../controllers/quotesController";

const biasQuotesRouter = Router();

biasQuotesRouter
.all("/*", authenticateToken)
.post("/:biasId/quotes", addQuote)
.get("/:biasId/quotes", listQuotes)
.get("/:biasId/:tag/quotes", listQuotesByTag)

export { biasQuotesRouter };