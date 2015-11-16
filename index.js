"use strict";
/**
 * Dependencies
 */
const Koa = require('koa');
const fs = require("fs");
const app = new Koa();
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
  console.log(~file.indexOf("js"));
  if (~file.indexOf("js")) {
    require(modelsPath + "/" + file);
  }
});

// logger

app.use((ctx, next) => {
  const start = new Date;
  return next().then(() => {
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);