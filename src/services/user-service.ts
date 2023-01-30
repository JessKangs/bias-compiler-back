import { notFoundError } from "../errors";
import { userRepository } from "../repositories/user-repository";

async function getProfileData(id:number ){
   
    const user = userRepository.findUserById(id);

    if(!user) throw notFoundError();

    return user;
}

async function addBias(
    userId: number,
    name: string,
    nickname: string,
    birthdate: Date,
    affiliations: string,
    imageUrl: string
    ){
   
    return userRepository.addBias(
            userId,
            name,
            nickname,
            birthdate,
            affiliations,
            imageUrl
    );
}

async function getBiasesByUserId(id:number ){
   
    const biases = userRepository.findBiasesByUserId(id);

    if(!biases) throw notFoundError();

    return biases;
}


const userService = {
    addBias,
    getProfileData,
    getBiasesByUserId
  };

  export { userService };
  
  
