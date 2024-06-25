const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

module.exports = {
  check: (req, res, next) => {
    req.user = user;
    next();
  }
}