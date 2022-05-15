const createError = require('http-errors');
const { User } = require('../../models')

module.exports = {
  postSignUp: (req, res, next) => {
    const validation = User.validate(req.body)

    if (validation.error) {
      const error = new Error(validation.error.message)
      error.statusCode = 400
      return next(error)
    }
    // check existance
    const user = new User(req.body)
    user.checkExistance().then(result => {
      if (result.check) {
        const error = new Error(result.message)
        error.statusCode = 409
        return next(error)
      }
      user.save(err => {
        if (err) {
          return next(createError(500))
        }

        res.status(201).json({
          message: "user has been successfly created"
        })
      })
    }).catch(err => createError(500))
  },
};
