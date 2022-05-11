const { Router } = require("express");

const {
  getLogin,
  postLogin,
  getSignUp,
  postSignUp,
} = require("../controllers");

const router = Router();

router
  .get("/login", getLogin)
  .post("/login", postLogin)
  .get("/signup", getSignUp)
  .post("/signup", postSignUp);

module.exports = router;
