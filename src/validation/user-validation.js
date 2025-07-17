import Joi from "joi";

const registerUserRequest = Joi.object({
  email: Joi.string().min(3).max(100).email().required(),
  username: Joi.string().min(3).max(100).required(),
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*])")
    )
    .required(),
});

const loginUserRequest = Joi.object({
  email: Joi.string().min(3).max(100).email().required(),
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*])")
    )
    .required(),
});

export { registerUserRequest, loginUserRequest };
