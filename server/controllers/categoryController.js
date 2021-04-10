const router = require("express").Router();
const categoryServise = require("../services/categoryService");

router.get("/phones", (req, res) => {
  const productType = "phone";
  try {
    categoryServise.getPhoneProducts(productType).then((phones) => {
      res.status(200).json({ phones });
    });
  } catch (error) {
    res.status(404).json({
      message: "No products found",
    });
  }
});

router.get("/laptops", (req, res) => {
  const productType = "laptop";
  try {
    categoryServise.getLaptopProducts(productType).then((laptops) => {
      res.status(200).json({ laptops });
    });
  } catch (error) {
    res.status(404).json({
      message: "No products found",
    });
  }
});

router.get("/tvs", (req, res) => {
  const productType = "tv";
  try {
    categoryServise.getTVProducts(productType).then((tvs) => {
      res.status(200).json({ tvs });
    });
  } catch (error) {
    res.status(404).json({
      message: "No products found",
    });
  }
});

module.exports = router;
