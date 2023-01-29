import { memoriesRepository } from "../repositories";

async function addMemory(
    biasId: number,
    title: string,
    date: Date,
    memory: string,
    feelings: string,
    url1: string,
    url2: string,
    url3: string
    ) { 

    return memoriesRepository.addMemory(
        biasId,
        title,
        date,
        memory,
        feelings,
        url1,
        url2,
        url3
    
    );
}

async function listMemories( biasId: number ){
   
    return memoriesRepository.listMemories( biasId );
}

async function listMemoriesByDate( biasId: number, date: Date ){
   
    return memoriesRepository.listMemoriesByDate( biasId, date );
}

async function listMemoriesByTitle( biasId: number, title: string ){
   
    return memoriesRepository.listMemoriesByTitle( biasId, title );
}

const memoriesService = {
    addMemory,
    listMemories,
    listMemoriesByDate,
    listMemoriesByTitle
  };

export default memoriesService;
  