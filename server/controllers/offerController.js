const router = require("express").Router();
const offerService = require("../services/offerService");

router.post("/", async (req, res) => {
  try {
    let offerTocreate = await offerService.createOffer(req.body);
    res.status(200).json({
      message: "Offer created successfully!",
      offerTocreate,
    });
  } catch (error) {
    res.sendStatus(404);
    console.log(error);
  }
});

module.exports = router;
