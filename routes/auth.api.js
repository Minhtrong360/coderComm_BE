const express = require("express");
const { body } = require("express-validator");

const validators = require("../middlewares/validators");
const authController = require("../controllers/auth.controller");
const router = express.Router();

/**
 * @route POST /auth/login
 * @description log in with email and password
 * @body {email, password}
 * @access Public
 */
router.post(
  "/login",
  validators.validate([
    body("name", "Invalid name").exists().notEmpty(),
    body("email", "Invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "Invaliad password").exists().notEmpty(),
  ]),
  authController.loginWithEmail
);

module.exports = router;
