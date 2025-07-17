import jwt from "jsonwebtoken";
import { config } from "../app/config.js";

const generateToken = (payload) => {
  return jwt.sign({ payload }, config.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export { generateToken };
