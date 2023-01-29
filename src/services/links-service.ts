import { linksRepository } from "../repositories";

async function addLink(
    biasId: number,
    title: string,
    site: string,
    description: string,
    url: string,
    tag: string
    ){
   
    return linksRepository.addLink( 
        biasId,
        title,
        site,
        description,
        url,
        tag
    );
}

async function listLinks( biasId: number ){
   
    return linksRepository.listLinks( biasId );
}

async function listLinksByTag( biasId: number, tag:string ){

    return linksRepository.listLinksByTag( biasId, tag );
}

const linksService = {
    addLink,
    listLinks,
    listLinksByTag
  };
  
  export default linksService;
  
