import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { requestError } from '../errors/request-error';
import { addMemoryBody } from '../schemas/memories-schema';

function isMemoryBodyValid(req: Request, res: Response, next: NextFunction) {
    const {  title, date, memory, feelings, url1, url2, url3 } = req.body;

    const body = { title, date, memory, feelings, url1, url2, url3 }; 
   
    if(!title || !date || !memory || feelings.length === 0 ) throw requestError(httpStatus.BAD_REQUEST, "cannot add memory with empty body")

    const validation = addMemoryBody.validate(body, {abortEarly: true})
    
    if(validation.error) {
        console.log(validation.error)
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error)
        
    } else {
        next()
    }
}

export { isMemoryBodyValid }