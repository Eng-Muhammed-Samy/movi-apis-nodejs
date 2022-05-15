const { Router } = require("express");

const {
  postLogin,
  postSignUp,
} = require("../controllers");

const router = Router();

router
  .post("/login", postLogin)
  .post("/signup", postSignUp);

module.exports = router;
