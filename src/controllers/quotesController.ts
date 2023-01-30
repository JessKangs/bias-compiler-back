import { Request, Response } from "express";
import httpStatus from "http-status";
import quotesService from "../services/quotes-service";

export async function addQuote(req: Request, res: Response){
    const { 
        quote,
        context,
        imageUrl,
        url,
        date,
        tag } = req.body;
    const {  biasId } = req.params;
      
    try {
        const response = await quotesService.addQuote(
        Number(biasId), 
        quote,
        context,
        imageUrl,
        url,
        new Date(date),
        tag)

        return res.status(httpStatus.CREATED).send(response);
    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listQuotes(req: Request, res: Response){
    const {  biasId } = req.params;
   
    try {
        const response = await quotesService.listQuotes(Number(biasId))

        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function listQuotesByTag(req: Request, res: Response){
    const { biasId, tag } = req.params;
   
    try {
        const response = await quotesService.listQuoteByTag(Number(biasId), tag);

        return res.status(httpStatus.OK).send(response);

    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}
