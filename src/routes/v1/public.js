import express from "express";
import userController from "../../controller/user-controller.js";
import logger from "../../helper/logger.js";

const publicRouter = express.Router();

publicRouter.post("/register", userController.register);

publicRouter.get("/status", (req, res) => {
  logger.info("Checking the API status: Everything is OK");
  res.status(200).send({
    status: "UP",
    message: "The API is up and running!",
  });
});

export { publicRouter };
