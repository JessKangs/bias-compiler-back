import { factRepository } from "../repositories";

async function addFact(
    biasId: number,
    fact: string,
    date: Date
    ){
   
    return factRepository.addFact(
        biasId,
        fact,
        date
    );
}

async function listFacts( biasId: number ){
   
    return factRepository.listFacts( biasId );
}

const factsService = {
    addFact,
    listFacts
  };
  
  export default factsService;
  
