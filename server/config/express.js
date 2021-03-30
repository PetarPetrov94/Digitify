const express = require("express");

function expressSetup(app) {
  app.use(express.static("public"));

  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
}

module.exports = expressSetup;
