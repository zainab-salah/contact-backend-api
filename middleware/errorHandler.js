const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "Validation Failed",
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "Not Found",
      });
    case constants.UNAUTHORIZED:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "Unauthorized",
      });
    case constants.FORBIDDEN:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "Forbidden",
      });
    case constants.SERVER_ERROR:
      res.json({
        message: err.message,
        stackTrace: err.stack,
        title: "Server Error",
      });
      break;
    default:
      console.log("No Error , All good!");
      break;
  }

  res.json({
    message: err.message,
    stackTrace: err.stack,
    title: "Server Error",
  });
};

module.exports = errorHandler;
