import jwt from "jsonwebtoken";
import logger from "../helper/logger.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing or malformed token" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token not found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.payload;

    next();
  } catch (err) {
    logger.error(err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export { authMiddleware };
