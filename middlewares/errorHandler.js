import { ValidationError } from "joi";
import { DEBUG_MOD } from "../config";

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    ...(DEBUG_MOD === "true" && { originalMessage: err.message }),
  };

  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      error: err.message,
    };
  }

  req.status(statusCode).json(data);
};

export default errorHandler;
