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
            biasid:biasId,
            title,
            date,
            memory,
            feelings,
            url1,
            url2,
            url3
            }
    })
}

async function listMemories(
    biasId: number
    ) {
    return prisma.memories.findMany({
        where: {
            biasid:biasId
            }
    })
}

async function listMemoriesByDate(
    biasId: number,
    date: Date
    ) {
    return prisma.memories.findMany({
        where: {
            biasid:biasId,
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
            biasid:biasId,
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

