const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const { email } = req.body;
  console.log(email);
  if (email) {
    return res.status(200).json({ email: email, message: "Logged in" });
  }
  return res.status(200).json({ message: "Not logged in" });
});

module.exports = router;
