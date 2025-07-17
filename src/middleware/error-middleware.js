import { ResponseError } from "../error/response-error.js";
import logger from "../helper/logger.js";

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
  } else {
    logger.error(err.message);
    res
      .status(500)
      .json({
        errors: "server error",
      })
      .end();
  }
};

export { errorMiddleware };
