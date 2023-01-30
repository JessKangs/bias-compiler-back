import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { requestError } from '../errors/request-error';
import { addLinkBody } from '../schemas/links-schema';

function isLinkBodyValid(req: Request, res: Response, next: NextFunction) {
    const { title, site, description, url, tag } = req.body;

    const body = { title, site, description, url, tag }; 

    if(!body) throw requestError(httpStatus.BAD_REQUEST, "cannot add link with empty body")

    const validation = addLinkBody.validate(body, {abortEarly: true})
    
    if(validation.error) {
        
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error)
        
    } else {
        next()
    }
}

export { isLinkBodyValid }