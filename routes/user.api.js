const express = require("express");
const { register } = require("../controllers/user.controller");
const router = express.Router();
const { body } = require("express-validator");

const validators = require("../middlewares/validators");

/**
 * @route POST /users
 * @description Register new user
 * @body {email, password}
 * @access Public
 */
router.post(
  "/",
  validators.validate([
    body("name", "Invalid name").exists().notEmpty(),
    body("email", "Invalid email")
      .exists()
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password", "Invaliad password").exists().notEmpty(),
  ]),
  register
);

/**
 * @route GET /users?page=1&limit=10
 * @description Get users with pagination
 * @access Login required
 */

/**
 * @route GET /users/me
 * @description Get curent user info
 * @access Login required
 */

/**
 * @route GET /users/:id
 * @description Get a user profile
 * @access Login required
 */

/**
 * @route PUT /users/:id
 * @description Update user profile
 * @body {name, avatarUrl, coverUrl, aboutMe, city, country, company, jobTitle, facebookLink, instagramLink, linkedinLink, twitterLink}
 * @access Login required
 */

module.exports = router;
