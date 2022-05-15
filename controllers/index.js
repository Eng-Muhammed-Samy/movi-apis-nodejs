const { postLogin } = require("./auth/login");
const { postSignUp } = require("./auth/signUp");
const { getMovies, getOneMovie, postMove } = require("./movies");

module.exports = {
  postLogin,
  postSignUp,
  getMovies,
  getOneMovie,
  postMove
};
