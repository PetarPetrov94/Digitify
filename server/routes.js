const { Router } = require("express");

const homeController = require("./controllers/homeController");
const aboutController = require("./controllers/aboutController");
const authController = require("./controllers/authController");

const router = Router();

router.use("/about", aboutController);
router.use("/home", homeController);
router.use("/register", authController);

module.exports = router;
