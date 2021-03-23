const { Router } = require("express");

const homeController = require("./controllers/homeController");
const aboutController = require("./controllers/aboutController");

const router = Router();

router.use("/about", aboutController);
router.use("/home", homeController);

module.exports = router;
