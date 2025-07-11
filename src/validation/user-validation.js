import Joi from "joi";

const registerUserRequest = Joi.object({
  email: Joi.string().min(3).max(100).email().required(),
  password: Joi.string().min(8).required(),
});

export { registerUserRequest };
