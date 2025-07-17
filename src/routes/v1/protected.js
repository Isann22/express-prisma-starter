import express from "express";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import userController from "../../controller/user-controller.js";

const protectedRouter = express.Router();

protectedRouter.use(authMiddleware);

protectedRouter.get("/user/me", userController.getProfile);

export { protectedRouter };
