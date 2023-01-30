import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { requestError } from '../errors/request-error';
import { addQuoteBody } from "../schemas/quotes-schema"

function isQuoteBodyValid(req: Request, res: Response, next: NextFunction) {
    const { quote, context, imageUrl, url, date, tag } = req.body;

    const body = {quote, context, imageUrl, url, date, tag}; 

    if(!quote || !context || !date ) throw requestError(httpStatus.BAD_REQUEST, "cannot add quote with empty body")

    const validation = addQuoteBody.validate(body, {abortEarly: true})
    
    if(validation.error) {
        
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error)
        
    } else {
        next()
    }
}

export { isQuoteBodyValid }