import { prisma } from "../config";

async function addFact(
    biasId: number,
    fact: string,
    date: Date
    ) {
    return prisma.facts.create({
        data: {
            biasid:biasId,
            fact,
            date
            }
    })
}

async function listFacts(
    biasId: number
    ) {
    return prisma.facts.findMany({
        where: {
            biasid:biasId
            }
    })
}

const factRepository = {
    addFact,
    listFacts
}

export { factRepository }

