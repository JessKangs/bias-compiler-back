import { Request, Response } from "express";
import httpStatus from "http-status";
import factsService from "../services/facts-service";

export async function addFact(req: Request, res: Response){
    const { fact, date } = req.body;
    const {  biasId } = req.params;
   
    try {
        const response = await factsService.addFact(Number(biasId), fact, new Date(date))

        return res.status(httpStatus.CREATED).send(response);

    } catch(error) {
        
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listFacts(req: Request, res: Response){
    const {  biasId } = req.params;
   
    try {
        const response = await factsService.listFacts(Number(biasId))
        
        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}