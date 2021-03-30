const express = require("express");
const cookieParser = require("cookie-parser");
const auth = require("../middlewares/auth");

function expressSetup(app) {
  app.use(express.static("public"));

  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());

  app.use(cookieParser());

  app.use(auth());
}

module.exports = expressSetup;
