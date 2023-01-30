import joi from "joi";

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.required()
})

export const signUpSchema = joi.object({
    nickname: joi.string().required(),
    imageUrl: joi.string().required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi.string().min(10)
})