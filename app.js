const express = require("express");
const createError = require("http-errors");

const { logger } = require("./configuration");
const middleware = require("./middlewares");
const routes = require("./routes");

const PORT = 3000;
const app = express();

// handle error if db fetal connection
app.on("unhandledRejection", (reason) => {
  logger.error(reason);
  process.exit(1);
});

middleware(app);

routes(app);

// handdle not found error
app.use((req, res, next) => {
  const error = createError(404);
  next(error); // if next has one parameter then the meddlwate translate to the first 4 parameter method
});

app.use((error, req, res, next) => {
  logger.error(error);
  res.stutusCode = error.stutusCode;

  res.json({
    message: error.message,
  });
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
