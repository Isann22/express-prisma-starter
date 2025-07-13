import express from "express";
import userController from "../../controller/user-controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});
router.post("/register", userController.register);

export { router };
