import { prisma } from "../config";

async function findUserById(id: number) {
    return prisma.users.findFirst({
        where: {
            id
        }
    });
}

async function findBiasesByUserId(userId: number) {
    return prisma.biases.findMany({
        where: {
            userid_:userId
        }
    });
}

const userRepository = {
    findUserById,
    findBiasesByUserId
}

export { userRepository }

