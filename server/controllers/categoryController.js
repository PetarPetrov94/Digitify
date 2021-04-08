const router = require("express").Router();
const categoryServise = require("../services/categoryService");

router.get("/phones", (req, res) => {
  const productType = "phone";
  try {
    categoryServise.getPhoneProducts(productType).then((phones) => {
      console.log(phones);
      res.status(200).json({ phones });
    });
  } catch (error) {
    res.status(404).json({
      message: "No products found",
    });
  }
});

module.exports = router;
