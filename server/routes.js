const { Router } = require("express");

const router = Router();

router.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

module.exports = router;
