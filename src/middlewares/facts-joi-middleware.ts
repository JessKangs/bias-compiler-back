import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { requestError } from '../errors/request-error';
import { addFactBody } from "../schemas/facts-schema";

function isFactBodyValid(req: Request, res: Response, next: NextFunction) {
    const { fact, date } = req.body;

    const body = { fact, date }; 

    if(!body) throw requestError(httpStatus.BAD_REQUEST, "cannot add fact with empty body")

    const validation = addFactBody.validate(body, {abortEarly: true})
    
    if(validation.error) {
        
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error)
        
    } else {
        next()
    }
}

export { isFactBodyValid }