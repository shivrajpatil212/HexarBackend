import { Joi, celebrate, Segments } from "celebrate";

export const addBannerValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    bannerTitle: Joi.string().required().messages({
      'any.required': 'bannerTitle is required.',
      'string.empty': 'bannerTitle cannot be empty.',
    }),
    bannerSubTitle: Joi.string().required().messages({
      'any.required': 'bannerSubTitle is required.',
      'string.empty': 'bannerSubTitle cannot be empty.',
    }),
  })
});

export const updateBannerByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  }),
  [Segments.BODY]: Joi.object().keys({
    bannerTitle: Joi.string().optional().messages({
      'string.empty': 'bannerTitle cannot be empty.',
    }),
    bannerSubTitle: Joi.string().optional().messages({
      'string.empty': 'bannerSubTitle cannot be empty.',
    }),
  }).min(1)
});

export const deleteBannerByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  })
});