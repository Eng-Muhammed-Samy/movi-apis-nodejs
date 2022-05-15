const { Router } = require("express");
const { getMovies, getOneMovie, postMove } = require("../controllers");
const { auth } = require('../middlewares')
const router = Router();

router.get("/movies/:page", auth, getMovies)
    .get("/move/:id", getOneMovie)
    .post('/move', postMove);

module.exports = router;
