import { ResponseError } from "../error/response-error.js";

const errorMiddleware = (req, res, next, err) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res.status(err.status).json({
      error: err.message,
    });
  } else {
    res.status(500).json({
      errors: err.message,
    });
  }
};

export { errorMiddleware };
