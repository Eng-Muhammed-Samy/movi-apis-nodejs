const { logger } = require("../../configuration/");

module.exports = {
  getLogin: (req, res, next) => {
    logger.info("hello");
    res.send("welcom");
  },
  postLogin: (req, res, next) => {
    console.log("welcom to login post");
  },
};
