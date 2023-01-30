import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { requestError } from '../errors/request-error';
import { addBiasBody } from "../schemas/user-schema"

function isAddBiasBodyValid(req: Request, res: Response, next: NextFunction) {
    const { name, nickname, birthdate, affiliations, imageUrl } = req.body;

    const body = {name, nickname, birthdate, affiliations, imageUrl}; 

    if(!body) throw requestError(httpStatus.BAD_REQUEST, "cannot add bias with empty body")

    const validation = addBiasBody.validate(body, {abortEarly: true})
    
    if(validation.error) {
        
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error)
        
    } else {
        next()
    }
}

export { isAddBiasBodyValid }