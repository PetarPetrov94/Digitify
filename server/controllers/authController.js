const router = require("express").Router();
const authService = require("../services/authService");

const { COOKIE_NAME } = require("../config/config");

router.post("/register", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  // if (password !== repeatPassword) {
  //   return;
  // }

  try {
    let user = await authService.registerUser({ email, password });
    res.send(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let token = await authService.loginUser({ email, password });
    res.cookie(COOKIE_NAME, token);

    res.status(200).json({
      message: "Logged in successfully!",
      token,
      email,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
