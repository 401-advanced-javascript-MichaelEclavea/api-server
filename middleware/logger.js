'use strict';

const todaysDate = require("./timestamp");


function loggingMiddleware(req, res, next) {
    console.log(`The ${req.path} route was hit, using the ${req.method} method at ${todaysDate}`);
    next();
  };


  module.exports = loggingMiddleware;