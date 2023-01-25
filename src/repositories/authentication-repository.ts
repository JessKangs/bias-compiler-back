import { prisma } from "../config";

async function findByEmail(email: string) {
    return prisma.users.findFirst({
        where:{
            email, 
        }
    });
}

async function createUser(
    nickname: string,
    imageUrl: string,
    email:string, 
    password:string,
    ) {
    return prisma.users.create({
        data: {
            nickname,
            imageurl_:imageUrl,
            email,
            password
        }
    });
}

async function upsertSession(userId: number, token: string){
    return prisma.sessions.upsert({
        where: {
            userid_: userId
        },
        create: {
            userid_:userId,
            token
        },
        update: {
            userid_:userId,
            token
        }
    });
}

const authenticationRepository = {
    findByEmail,
    createUser,
    upsertSession
}

export { authenticationRepository }
