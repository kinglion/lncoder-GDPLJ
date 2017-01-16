"use strict";
/**
 * Dependencies
 */
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
const passport = require("koa-passport");
const mongoose = require("mongoose");

/**
 * Config
 */
const config = require("./config/config");

/**
 * Connect to database
 */
mongoose.connect(config.mongo.url);
mongoose.connection.on("error", function(err) {
  console.log(err);
});

/**
 * Load the models
 */
const modelsPath = config.app.root + "/src/models";
fs.readdirSync(modelsPath).forEach(function(file) {
  if (~file.indexOf("js")) {
    require(modelsPath + "/" + file);
  }
});

require("./config/passport")(passport, config);
require("./config/koa")(app, config, passport);


app.listen(3000);
