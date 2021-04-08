const router = require("express").Router();
const categoryServise = require("../services/categoryService");

router.get("/phones", async (req, res) => {
  const productType = "phone";
  try {
    const phones = await categoryServise.getPhoneProducts(productType);
    res.status(200).json([phones]);
  } catch (error) {
    res.status(404).json({
      message: "No products found",
    });
  }
});

module.exports = router;
