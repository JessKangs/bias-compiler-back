import joi from "joi";

export const addFactBody = joi.object({
    fact: joi.string().required(),
    date: joi.date().required()
})