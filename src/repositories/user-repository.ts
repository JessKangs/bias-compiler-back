import { prisma } from "../config";

async function findUserById(id: number) {
    return prisma.users.findFirst({
        where: {
            id
        }
    });
}

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
        userid:userId,
        name,
        nickname,
        birthdate,
        affiliations,
        imageurl: imageUrl
        }
    });
}

async function findBiasesByUserId(userId: number) {
    return prisma.biases.findMany({
        where: {
            userid:userId
        }
    });
}

const userRepository = {
    addBias,
    findUserById,
    findBiasesByUserId
}

export { userRepository }

