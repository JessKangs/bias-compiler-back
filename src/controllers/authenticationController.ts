import { Request, Response } from "express";
import httpStatus from "http-status";

import { authenticationService } from "../services";

export async function createSignUp(req: Request, res: Response) {
    const { nickname, imageUrl, email, password } = req.body;
    
    try {
        const response = await authenticationService.criarRegistro(nickname, imageUrl, email, password);
        
        return res.status(httpStatus.CREATED).send(response);
    } catch(err) {
        
        if (err.message === "conflict error") {
            return res.status(httpStatus.BAD_REQUEST).send("Email já cadastrado!")
        } 
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
       
        return res.status(httpStatus.NOT_FOUND).send("Cadastro não encontrado!")
    }
}