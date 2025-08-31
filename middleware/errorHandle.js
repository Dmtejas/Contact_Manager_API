import { constants } from '../constants.js';

const errorHandler = (err, req, res, next) => {
  // If status code is still 200, force it to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log(constants.VALIDATION_ERROR)
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.status(statusCode).json({
        title: "VALIDATION ERROR",
        success: false,
        message: err.message || "Something went wrong",
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });break;
    case constants.NOT_FOUND:
      res.status(statusCode).json({
        title: "NOT FOUND",
        success: false,
        message: err.message || "Something went wrong",
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });break;
    default: 
      res.status(statusCode).json({
        title: "UNKNOWN_ERROR",
        success: "false",
        message: err.message || "Something goes wrong",
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      })  

  }
};

export default errorHandler;
