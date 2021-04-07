const { Router } = require("express");

const homeController = require("./controllers/homeController");
const aboutController = require("./controllers/aboutController");
const authController = require("./controllers/authController");
const offerController = require("./controllers/offerController");

const router = Router();

router.use("/about", aboutController);
router.use("/home", homeController);
router.use("/auth", authController);
router.use("/create-offer", offerController);

module.exports = router;
