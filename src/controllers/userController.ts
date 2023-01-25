import { Request, Response } from "express";
import httpStatus from "http-status";
import { userService } from "../services";

export async function findUserById(req: Request, res: Response){
    
    const { userId } = req.params;
   
    try {
        const response = await userService.getProfileData(Number(userId));

        return res.status(httpStatus.OK).send(response);
    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}

export async function findBiasesByUserId(req: Request, res: Response){
    
    const { userId } = req.params;
   
    try {
        const response = await userService.getBiasesByUserId(Number(userId));

        return res.status(httpStatus.OK).send(response);
    } catch(error) {
       console.log(error)
        return res.sendStatus(httpStatus.BAD_REQUEST)
    }
}