const router = require("express").Router();
const authService = require("../services/authService");

const { COOKIE_NAME } = require("../config/config");

router.post("/register", (req, res) => {
  const { email, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    return;
  }

  try {
    let user = authService.registerUser({ email, password });
    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
