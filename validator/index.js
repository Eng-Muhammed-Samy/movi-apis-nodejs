const { schema, loginSchema } = require("./userValidator")
// const { moveSchema } = 
module.exports = {
    userValidate: schema,
    loginSchema: loginSchema,
    moviValidate: require('./moveValidator')
};
