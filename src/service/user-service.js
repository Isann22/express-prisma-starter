import { prismaClient } from "../app/prisma.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../helper/validation.js";
import bcrypt from "bcrypt";
import { registerUserRequest } from "../validation/user-validation.js";

const register = async (userReq) => {
  const data = validate(registerUserRequest, userReq);

  const existUser = prismaClient.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existUser) {
    throw new ResponseError(400, "email already registered");
  }

  data.password = await bcrypt.hash(data.password, 10);

  return await prismaClient.user.create({
    data,
    select: {
      email: true,
      username: true,
    },
  });
};

export default { register };
