import { isCelebrateError } from "celebrate";
import errorHandler from "../utils/errorHandler.js";

export const errorMiddleware = (err, req, res, next) => {
  
  // Handle Celebrate Validation Errors
  if (isCelebrateError(err)) {
    const extractedErrors = [];
    for (const [, value] of err.details.entries()) {
      extractedErrors.push(value.message);
    }
    return res.error("Validation Failed", 400, extractedErrors, "VALIDATION_ERROR");
  }

  // Convert unexpected errors to errorHandler
  if (!(err instanceof errorHandler)) {
    console.error("Unexpected Error:--", err);
    err = new errorHandler("Internal Server Error", 500);
  }

  return res.error(err.message, err.statusCode, err.errors, err.code);
};