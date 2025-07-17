import { publicRouter } from "./v1/public.js";
import express from "express";

const router = express.Router();

router.use("/api/v1", publicRouter);

export default router;
