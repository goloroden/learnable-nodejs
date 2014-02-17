'use strict';

var setup = function (appName) {
  return function (req, res, next) {
    if (req.hasLoggingBeenRun) {
      return next();
    }

    console.log(appName + ': ' + req.method + ' ' + req.url);
    req.hasLoggingBeenRun = true;
    next();
  };
};

module.exports = setup;
