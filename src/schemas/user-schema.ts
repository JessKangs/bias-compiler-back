import joi from "joi";

export const addBiasBody = joi.object({
    name: joi.string().required(),
    nickname: joi.string().required(),
    birthdate: joi.date().required(),
    affiliations: joi.string().required(),
    imageUrl: joi.string().regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,).required()
})