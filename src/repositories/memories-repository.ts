import { prisma } from "../config";

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
    return prisma.memories.create({
        data: {
            biasid_:biasId,
            title,
            date,
            memory,
            feelings,
            url1_:url1,
            url2_:url2,
            url3_:url3
            }
    })
}

async function listMemories(
    biasId: number
    ) {
    return prisma.memories.findMany({
        where: {
            biasid_:biasId
            }
    })
}

async function listMemoriesByDate(
    biasId: number,
    date: Date
    ) {
    return prisma.memories.findMany({
        where: {
            biasid_:biasId,
            date
            }
    })
}

async function listMemoriesByTitle(
    biasId: number,
    title: string
    ) {
    return prisma.memories.findMany({
        where: {
            biasid_:biasId,
            title
            }
    })
}

const memoriesRepository = {
    addMemory,
    listMemories,
    listMemoriesByDate,
    listMemoriesByTitle
}

export { memoriesRepository }

