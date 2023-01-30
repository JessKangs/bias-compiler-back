import { prisma } from "../config";

async function addQuote(
    biasId: number,
    quote: string,
    context: string,
    imageUrl: string,
    url: string,
    date: Date,
    tag: string
    ) {
    
    return prisma.quotes.create({
        data: {
            biasid:biasId,
            quote,
            context,
            imageurl: imageUrl,
            url,
            date,
            tag
            }
    })
}

async function listQuotes(
    biasId: number
    ) {
    return prisma.quotes.findMany({
        where: {
            biasid:biasId
            }
    })
}

async function listQuotesByTag(
    biasId: number,
    tag: string
    ) {
    return prisma.quotes.findMany({
        where: {
            biasid:biasId,
            tag
            }
    })
}

const quotesRepository = {
    addQuote,
    listQuotes,
    listQuotesByTag
}

export { quotesRepository }

