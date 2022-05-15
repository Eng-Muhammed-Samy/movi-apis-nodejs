const { dbconn } = require("../configuration");
const { ObjectId } = require("bson");
const { Move } = require('../models')
const createError = require("http-errors");

module.exports = {
  getMovies: (req, res, next) => {
    const pageNumber = parseInt(req.params.page);

    if (isNaN(pageNumber)) {
      return next(createError(400));
    }

    const moviPerPage = (pageNumber - 1) * 10;

    dbconn("movies", async (db) => {
      //pagination
      try {
        const movies = await db.find({}).skip(moviPerPage).limit(10).toArray();
        res.json(movies);
      } catch (err) {
        return next(createError(500));
      }
    });
  },

  getOneMovie: (req, res, next) => {
    // handle error in id
    if (!ObjectId.isValid(req.params.id)) {
      return next(createError(400));
    }
    const _id = new ObjectId(req.params.id);
    dbconn("movies", async (db) => {
      // handle any error in db request
      try {
        const movie = await db.findOne({ _id });
        if (!movie) {
          return next(createError(404));
        }
        res.json(movie);
      } catch (err) {
        return next(createError(500));
      }
    });
  },
  postMove: (req, res, next) => {
    const validaton = Move.validateMove(req.body)
    if (validaton.error) {
      const error = new Error(validaton.error.message)
      error.statusCode = 400
      return next(error)
    }
    const move = new Move(req.body)
    move.saveMove((err) => {
      if (err) {
        return next(createError(500))
      }
      res.status(201).json({ message: "Movi created successfully" })
    })
  }
};
