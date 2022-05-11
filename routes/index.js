const auth = require("./auth");

const movieRouter = require("./movies");

module.exports = (app) => {
  app.use("/auth", auth);
  app.use(movieRouter);
};
