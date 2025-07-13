import express from "express";
import { errorMiddleware } from "../middleware/error-middleware";
import { router } from "../routes/v1/router";

export const app = express();

app.use(router);
app.use(errorMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
