import { Joi, celebrate, Segments } from "celebrate";

export const addMissionValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().messages({
      'any.required': 'title is required.',
      'string.empty': 'title cannot be empty.',
    }),
    description: Joi.string().required().messages({
      'any.required': 'description is required.',
      'string.empty': 'description cannot be empty.',
    }),
  })
});

export const updateMissionVisionByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  }),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().optional().messages({
      'string.empty': 'title cannot be empty.',
    }),
    description: Joi.string().optional().messages({
      'string.empty': 'description cannot be empty.',
    }),
  }).min(1)
});

export const deleteMissionVisionByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  })
});
