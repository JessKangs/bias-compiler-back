import { notFoundError, invalidCredentialsError, conflictError, requestError } from "../errors";
import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import { addBiasRepository } from "../repositories";

async function addBias(
    userId: number,
    name: string,
    nickname: string,
    birthdate: Date,
    affiliations: string,
    imageUrl: string
    ){
   
    return addBiasRepository.addBias(
            userId,
            name,
            nickname,
            birthdate,
            affiliations,
            imageUrl
    );
}

const addBiasService = {
    addBias
  };
  
  export default addBiasService;
  
