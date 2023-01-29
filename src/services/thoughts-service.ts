import { thoughtsRepository } from "../repositories";

async function addThought(
    biasId: number,
    title: string,
    note: string,
    imageUrl: string,
    date: Date
    ) {

    return thoughtsRepository.addThought(
        biasId,
        title,
        note,
        imageUrl,
        date
    );
}

async function listThoughts( biasId: number ){
   
    return thoughtsRepository.listThoughts( biasId );
}

async function listThoughtsByTitle( biasId: number, title: string ){
   
    return thoughtsRepository.listThoughtsByTitle( biasId, title );
}

const thoughtsService = {
    addThought,
    listThoughts,
    listThoughtsByTitle
  };
  
  export default thoughtsService;
  
