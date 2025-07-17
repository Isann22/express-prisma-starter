import { protectedRouter } from "./v1/protected.js";
import { publicRouter } from "./v1/public.js";
import express from "express";

const router = express.Router();

router.use("/api/v1", publicRouter);
router.use("/api/v1", protectedRouter);

export default router;
