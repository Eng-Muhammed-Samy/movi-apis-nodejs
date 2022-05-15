const { postLogin } = require("./auth/login");
const { postSignUp } = require("./auth/signUp");
const { getMovies, getOneMovie } = require("./movies");

module.exports = {
  postLogin,
  postSignUp,
  getMovies,
  getOneMovie,
};
