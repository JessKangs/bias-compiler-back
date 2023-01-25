import { Request, Response } from "express";
import httpStatus from "http-status";

import addBiasService from "../services/add-bias-service";

export async function addBias(req: Request, res: Response){
    const { 
        name,
        nickname,
        birthdate,
        affiliations,
        imageUrl } = req.body;
    
        const { userId } = req.params;
   
        try {
            const response = await addBiasService.addBias(
                Number(userId),
                name,
                nickname,
                new Date(birthdate),
                affiliations,
                imageUrl
                );

                return res.status(httpStatus.CREATED).send(response);
        } catch(error) {
           console.log(error)
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }
}