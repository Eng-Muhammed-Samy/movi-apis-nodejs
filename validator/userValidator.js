const joi = require("@hapi/joi");

const schema = joi.object({
  first_name: joi.string().required().min(4),
  last_name: joi.string().required().min(4),
  username: joi.string().required().min(8),
  email: joi.string().email().required(),
  password: joi
    .string()
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      )
    )
    .message(
      "Your password must has at least one Char as upper , at least one lowe char , at least one special char and must be 8 char"
    )
    .required(),
});

const loginSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required()
})

module.exports = { schema, loginSchema };
