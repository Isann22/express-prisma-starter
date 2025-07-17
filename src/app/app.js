import express from "express";
import router from "../routes/index.js";
import morganMiddleware from "../middleware/morgan-middleware.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cookieParser from "cookie-parser";

export const app = express();

app.use(morganMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorMiddleware);
