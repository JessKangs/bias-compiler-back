import joi from "joi";

export const addLinkBody = joi.object({
    title: joi.string().required(),
    site: joi.string().required(),
    description: joi.string().required(),
    url: joi.string().regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    tag: joi.string().valid('VIDEO', 'PHOTO', 'TEXT', 'OTHER').required() 
})