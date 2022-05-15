const joi = require("@hapi/joi");

const moveSchema = joi.object({
    move_name: joi.string().required(),
    category: joi.string().required(),
    rate: joi.number().required(),
    year: joi.number().required(),
    type: joi.string().required(),
    description: joi.string().required(),
    directors: joi.array().required()
})

module.exports = moveSchema