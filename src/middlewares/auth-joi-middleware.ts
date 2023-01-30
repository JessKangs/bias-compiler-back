import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { requestError } from '../errors/request-error';
import { signUpSchema, loginSchema } from '../schemas/auth-schema';


function signInIsValid(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if(!email || !password) throw requestError(httpStatus.BAD_REQUEST, "cannot login with empty body")

    const validation = loginSchema.validate({email, password}, {abortEarly: true})
    
    if(validation.error) {
        
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error)
        
    } else {
        next()
    }
}

function signUpIsValid(req: Request, res: Response, next: NextFunction) {
    const { nickname, imageUrl, email, password } = req.body;

    const validation = signUpSchema.validate({ nickname, imageUrl, email, password }, { abortEarly: true })

    if (validation.error) {
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error)
    } else {
        next()
    }
}

export {signUpIsValid, signInIsValid}