import { Request, Response } from "express";
import httpStatus from "http-status";
import factsService from "../services/facts-service";
import thoughtsService from "../services/thoughts-service";

export async function addThought(req: Request, res: Response){
    const { 
        title,
        note,
        imageUrl,
        date 
    } = req.body;
    const {  biasId } = req.params;
   
    try {
        const response = await thoughtsService.addThought(
        Number(biasId), 
        title,
        note,
        imageUrl, 
        new Date(date));

        return res.status(httpStatus.CREATED).send(response);

    } catch(error) {
        
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listThoughts(req: Request, res: Response){
    const {  biasId } = req.params;
   
    try {
        const response = await thoughtsService.listThoughts(Number(biasId))
        
        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listThoughtsByTitle(req: Request, res: Response){
    const {  biasId, title } = req.params;
   
    try {
        const response = await thoughtsService.listThoughtsByTitle(Number(biasId), title)
        
        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}