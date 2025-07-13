import express from "express";
import { router } from "../routes/v1/router.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const app = express();

app.use(errorMiddleware);
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
