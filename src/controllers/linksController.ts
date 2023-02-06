import { Request, Response } from "express";
import httpStatus from "http-status";
import linksService from "../services/links-service";

export async function addLink(req: Request, res: Response){
    const { 
        title,
        site,
        url,
        tag } = req.body;
    const {  biasId } = req.params;
   
    try {
        const response = await linksService.addLink(
        Number(biasId), 
        title,
        site,
        url,
        tag);

        return res.status(httpStatus.CREATED).send(response);
    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listLinks(req: Request, res: Response){
    const {  biasId } = req.params;
   
    try {
        const response = await linksService.listLinks(Number(biasId))

        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listLinksByTag(req: Request, res: Response){
    const { biasId, tag } = req.params;
   
    try {
        const response = await linksService.listLinksByTag(Number(biasId), tag);

        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}
