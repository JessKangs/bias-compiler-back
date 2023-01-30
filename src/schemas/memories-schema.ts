import joi from "joi";

export const addMemoryBody = joi.object({
    title: joi.string().required(),
    date: joi.date().required(),
    memory: joi.string().required(),
    feelings: joi.array().required(),
    url1: joi.string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    url2: joi.string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    url3: joi.string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
})