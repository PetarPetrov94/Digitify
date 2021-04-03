const { Router } = require("express");

const router = Router();

router.get("/checkuser", (req, res) => {
  const { token } = req;

  if (token) {
    return res.status(200).json({ email: token.email });
  }

  return res.sendStatus(200);
});

module.exports = router;
