import { Request, Response } from "express";
import httpStatus from "http-status";
import memoriesService from "../services/memories-service";

export async function addMemory(req: Request, res: Response){
    const { 
        title,
        date,
        memory,
        feelings,
        url1,
        url2,
        url3 
    } = req.body;
    const {  biasId } = req.params;
   console.log('a')
    try {
        const response = await memoriesService.addMemory(
        Number(biasId), 
        title,
        new Date(date),
        memory,
        feelings,
        url1,
        url2,
        url3
        );

        return res.status(httpStatus.CREATED).send(response);

    } catch(error) {
        
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listMemories(req: Request, res: Response){
    const {  biasId } = req.params;
   
    try {
        const response = await memoriesService.listMemories(Number(biasId))
        
        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listMemoriesByDate(req: Request, res: Response){
    const {  biasId, date } = req.params;
   
    try {
        const response = await memoriesService.listMemoriesByDate(Number(biasId), new Date(date))
        
        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
       return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listMemoriesByTitle(req: Request, res: Response){
    const {  biasId, title } = req.params;
   
    try {
        const response = await memoriesService.listMemoriesByTitle(Number(biasId), title)
        
        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}