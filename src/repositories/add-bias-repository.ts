import { prisma } from "../config";

async function addBias(
    userId: number,
    name: string,
    nickname: string,
    birthdate: Date,
    affiliations: string,
    imageUrl: string
    ) {
    return prisma.biases.create({
        data: {
        userid_: userId,
        name,
        nickname,
        birthdate,
        affiliations,
        imageurl_:imageUrl
        }
    });
}

const addBiasRepository = {
    addBias
}

export { addBiasRepository }

