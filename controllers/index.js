const { getLogin, postLogin } = require("./auth/login");
const { getSignUp, postSignUp } = require("./auth/signUp");
const { getMovies, getOneMovie } = require("./movies");

module.exports = {
  getLogin,
  postLogin,
  getSignUp,
  postSignUp,
  getMovies,
  getOneMovie,
};
