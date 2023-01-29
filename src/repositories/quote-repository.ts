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
            biasid_:biasId,
            quote,
            context,
            imageurl_: imageUrl,
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
            biasid_:biasId
            }
    })
}

async function listQuotesByTag(
    biasId: number,
    tag: string
    ) {
    return prisma.quotes.findMany({
        where: {
            biasid_:biasId,
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

