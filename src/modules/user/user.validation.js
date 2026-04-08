import { Joi, celebrate, Segments } from "celebrate";

export const loginValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    userName: Joi.string().required().messages({
      'any.required': 'userName is required.',
      'string.empty': 'userName cannot be empty.',
    }),
    password: Joi.string().required().messages({
      'any.required': 'password is required.',
      'string.empty': 'password cannot be empty.',
    }),
  })
});
