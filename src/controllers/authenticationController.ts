import { Request, Response } from "express";
import httpStatus from "http-status";

import { authenticationService } from "../services";

export async function createSignUp(req: Request, res: Response) {
    const { nickname, imageUrl, email, password } = req.body;
    
    try {
        const response = await authenticationService.criarRegistro(nickname, imageUrl, email, password);
        
        return res.status(httpStatus.CREATED).send(response);
    } catch(error) {
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function createSignIn(req: Request, res: Response) {
    const { email, password } = req.body;
   
    try {
        
        const response = await authenticationService.login( email, password );
        
        return res.status(httpStatus.OK).send(response);
        
    } catch(error:any) {
        
        if(error.name === "RequestError") return res.sendStatus(httpStatus.BAD_REQUEST)
        console.log(error)
        return res.sendStatus(httpStatus.NOT_FOUND)
    }
}