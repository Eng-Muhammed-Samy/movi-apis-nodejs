const { createLogger, transports } = require("winston");

const loggingInfo = createLogger({
  transports: [
    new transports.File({
      filename: "./logs/loggInfo.log",
      level: "info",
    }),
  ],
});

loggingInfo.stream = {
  write: (message, encoding) => {
    loggingInfo.info(message);
  },
};
module.exports = loggingInfo;
