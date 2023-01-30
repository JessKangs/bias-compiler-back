import joi from "joi";

export const addQuoteBody = joi.object({
    quote: joi.string().required(),
    context: joi.string().required(),
    imageUrl: joi.string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    url: joi.string().allow(null, '').regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
    date: joi.date().allow(null, ''),
    tag: joi.string().valid('MENT', 'SONG', 'BUBBLE', 'OTHER').required()
})