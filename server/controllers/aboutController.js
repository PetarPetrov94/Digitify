const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "About page" });
});

module.exports = router;
