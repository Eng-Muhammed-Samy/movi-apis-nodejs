const { getLogin, postLogin } = require("./auth/login");
const { getSignUp, postSignUp } = require("./auth/signUp");

module.exports = { getLogin, postLogin, getSignUp, postSignUp };
