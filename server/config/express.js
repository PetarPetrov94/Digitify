const express = require("express");

function expressSetup(app) {
  app.use(express.static("public"));

  app.use(
    express.urlencoded({
      extended: true,
    })
  );
}

module.exports = expressSetup;
