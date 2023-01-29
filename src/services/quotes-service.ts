import { quotesRepository } from "../repositories";

async function addQuote(
    biasId: number,
    quote: string,
    context: string,
    imageUrl: string,
    url: string,
    date: Date,
    tag:  string
    ){
   
    return quotesRepository.addQuote(
        biasId,
        quote,
        context,
        imageUrl,
        url,
        date,
        tag
    );
}

async function listQuotes( biasId: number ){
   
    return quotesRepository.listQuotes( biasId );
}

async function listQuoteByTag( biasId: number, tag: string ){
   
    return quotesRepository.listQuotesByTag( biasId, tag );
}

const quotesService = {
    addQuote,
    listQuotes,
    listQuoteByTag
  };
  
  export default quotesService;
  
