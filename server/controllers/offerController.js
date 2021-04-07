const router = require("express").Router();
const offerService = require("../services/offerService");

router.post("/", (req, res) => {
  const {
    productName,
    productDescription,
    productImage,
    productType,
    productPrice,
  } = req.body;
});

module.exports = router;
