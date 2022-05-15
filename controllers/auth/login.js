const createError = require("http-errors");
const { User } = require("../../models");
const jwt = require('jsonwebtoken')
const { readFileSync } = require('fs')

module.exports = {
  postLogin: (req, res, next) => {
    User.login(req.body).then(result => {
      if (result instanceof Error) {
        return next(result)
      }
      const secretKey = readFileSync('./private.key')
      const token = jwt.sign({ _id: result._id, username: result.username }, secretKey, {
        expiresIn: '24h', // expiration date of token
      })
      res.json({ token })
    }).catch(err => next(createError(500)))
  },
};
