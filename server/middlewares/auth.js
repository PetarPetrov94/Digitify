const jwt = require("jsonwebtoken");
const { COOKIE_NAME, SECRET } = require("../config/config");

module.exports = function () {
  return (req, res, next) => {
    let { authorization: token } = req.headers;

    if (token) {
      jwt.verify(token, SECRET, function (err, payload) {
        if (err) {
          res.clearCookie(COOKIE_NAME);
        } else {
          req.token = payload;
          res.locals = payload;
          res.locals.isAuthenticated = true;
        }
      });
    }

    next();
  };
};
