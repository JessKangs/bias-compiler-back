import { prisma } from "../config";

async function addThought(
    biasId: number,
    title: string,
    note: string,
    imageUrl: string,
    date: Date
    ) {
    return prisma.my_thoughts.create({
        data: {
            biasid:biasId,
            title,
            note,
            imageurl:imageUrl,
            date
            }
    })
}

async function listThoughts(
    biasId: number
    ) {
    return prisma.my_thoughts.findMany({
        where: {
            biasid:biasId
            }
    })
}

async function listThoughtsByTitle(
    biasId: number,
    title: string
    ) {
    return prisma.my_thoughts.findMany({
        where: {
            biasid:biasId,
            title
            }
    })
}


const thoughtsRepository = {
    addThought,
    listThoughts,
    listThoughtsByTitle
}

export { thoughtsRepository }

