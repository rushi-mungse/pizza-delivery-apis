import { ValidationError } from "joi";
import { DEBUG_MOD } from "../config";
import CustomErroHandler from "../services/CustomErrorHandler";

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

  if (err instanceof CustomErroHandler) {
    statusCode = err.statuscode;
    data = {
      error: err.message,
    };
  }
  console.log(statusCode, data);
  res.status(statusCode).json(data);
};

export default errorHandler;
