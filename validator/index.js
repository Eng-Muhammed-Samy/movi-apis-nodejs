const { schema, loginSchema } = require("./userValidator")
module.exports = {
    userValidate: schema,
    loginSchema: loginSchema
};
