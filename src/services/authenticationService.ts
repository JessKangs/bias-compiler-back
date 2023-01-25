import { authenticationRepository } from "../repositories";
import bcrypt from "bcrypt";
import { notFoundError, invalidCredentialsError, conflictError, requestError } from "../errors";
import jwt from "jsonwebtoken";
import httpStatus from "http-status";

async function criarRegistro (
    nickname:string, 
    imageUrl:string, 
    email:string, 
    password:string
    ) {
    
        const userExists = await authenticationRepository.findByEmail(email);

        if(userExists) throw conflictError("conflict error");

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await authenticationRepository.createUser(
            nickname,
            imageUrl,
            email,
            hashedPassword
        );

        return user;
}

async function login (email:string, password:string) {
    if(!email || !password) throw requestError(httpStatus.BAD_REQUEST, "cannot login with empty body");

    const user = await authenticationRepository.findByEmail(email);

    if(!user) throw notFoundError();

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) throw invalidCredentialsError();

    const token = jwt.sign( {userId: user.id}, process.env.JWT_SECRET as string);

    const session = await authenticationRepository.upsertSession(
        user.id,
        token 
        );

    return session;
}

const authenticationService = {
    criarRegistro,
    login
}

export { authenticationService };
