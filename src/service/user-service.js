import { PrismaClient } from "../app/prisma.js";
import { validate } from "../helper/validation.js";
import { registerUserRequest } from "../validation/user-validation.js";

const register = async (req, res) => {
  const data = validate(registerUserRequest, req.body);
};
