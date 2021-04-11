const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Digitify is an online catalog to share your digital setup",
  });
});

module.exports = router;
