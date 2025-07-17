import { prismaClient } from "../app/prisma.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../helper/validation.js";
import bcrypt from "bcrypt";
import {
  loginUserRequest,
  registerUserRequest,
} from "../validation/user-validation.js";
import { generateToken } from "../helper/jwt.js";

const register = async (request) => {
  const data = validate(registerUserRequest, request);

  const existUser = await prismaClient.user.findUnique({
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

const login = async (request) => {
  const data = validate(loginUserRequest, request);

  const user = await prismaClient.user.findUnique({
    where: {
      email: data.email,
    },
    select: {
      id: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(400, "invalid email or password");
  }

  const matchPassword = await bcrypt.compare(request.password, user.password);

  if (!matchPassword) {
    throw new ResponseError(400, "invalid email or password");
  }

  const payload = {
    id: user.id,
  };
  const token = generateToken(payload);

  return token;
};

const getProfile = async (request) => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: request,
    },
    select: {
      email: true,
      username: true,
    },
  });

  if (!user) {
    throw new ResponseError(400, "user is not found");
  }

  return user;
};

export default { register, login, getProfile };
