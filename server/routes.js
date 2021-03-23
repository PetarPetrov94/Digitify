const { Router } = require("express");

const homeController = require("./controllers/homeController");

const router = Router();

router.use("/home", homeController);

module.exports = router;
