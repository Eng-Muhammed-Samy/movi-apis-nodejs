const { Router } = require("express");

const authController = require("../controllers");

const router = Router();

router
  .get("/login", authController.getLogin)
  .post("/login", authController.postLogin)
  .get("/signup", authController.getSignUp)
  .post("/signup", authController.postSignUp);

module.exports = router;
