
import { Joi, celebrate, Segments } from "celebrate";

export const addHexarFamilyValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    familyTitle: Joi.string().required().messages({
      'any.required': 'familyTitle is required.',
      'string.empty': 'familyTitle cannot be empty.',
    }),
    familyDescription: Joi.string().required().messages({
      'any.required': 'familyDescription is required.',
      'string.empty': 'familyDescription cannot be empty.',
    }),
  })
});

export const addHexarTimelineValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    timelineYear: Joi.string().required().messages({
      'any.required': 'timelineYear is required.',
      'string.empty': 'timelineYear cannot be empty.',
    }),
    timelineTitle: Joi.string().required().messages({
      'any.required': 'timelineTitle is required.',
      'string.empty': 'timelineTitle cannot be empty.',
    }),
    timelineDescription: Joi.string().required().messages({
      'any.required': 'timelineDescription is required.',
      'string.empty': 'timelineDescription cannot be empty.',
    }),
  })
});

export const addHexarFounderValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    founderName: Joi.string().required().messages({
      'any.required': 'founderName is required.',
      'string.empty': 'founderName cannot be empty.',
    }),
    founderDesignation: Joi.string().required().messages({
      'any.required': 'founderDesignation is required.',
      'string.empty': 'founderDesignation cannot be empty.',
    }),
  })
});

export const addHexarStandOutValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    standOutTitle: Joi.string().required().messages({
      'any.required': 'standOutTitle is required.',
      'string.empty': 'standOutTitle cannot be empty.',
    }),
    standOutDescription: Joi.string().required().messages({
      'any.required': 'standOutDescription is required.',
      'string.empty': 'standOutDescription cannot be empty.',
    }),
  })
});

export const updateHexarFamilyByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  }),
  [Segments.BODY]: Joi.object().keys({
    familyTitle: Joi.string().optional().messages({
      'string.empty': 'familyTitle cannot be empty.',
    }),
    familyDescription: Joi.string().optional().messages({
      'string.empty': 'familyDescription cannot be empty.',
    }),
  }).min(1)
});

export const updateHexarTimelineByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  }),
  [Segments.BODY]: Joi.object().keys({
    timelineYear: Joi.string().optional().messages({
      'string.empty': 'timelineYear cannot be empty.',
    }),
    timelineTitle: Joi.string().optional().messages({
      'string.empty': 'timelineTitle cannot be empty.',
    }),
    timelineDescription: Joi.string().optional().messages({
      'string.empty': 'timelineDescription cannot be empty.',
    }),
  }).min(1)
});

export const updateHexarFounderByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  }),
  [Segments.BODY]: Joi.object().keys({
    founderName: Joi.string().optional().messages({
      'string.empty': 'founderName cannot be empty.',
    }),
    founderDesignation: Joi.string().optional().messages({
      'string.empty': 'founderDesignation cannot be empty.',
    }),
  }).min(1)
});

export const updateHexarStandOutByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  }),
  [Segments.BODY]: Joi.object().keys({
    standOutTitle: Joi.string().optional().messages({
      'string.empty': 'standOutTitle cannot be empty.',
    }),
    standOutDescription: Joi.string().optional().messages({
      'string.empty': 'standOutDescription cannot be empty.',
    }),
  }).min(1)
});

export const deleteHexarFamilyByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  })
});

export const deleteHexarTimelineByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  })
});

export const deleteHexarFounderByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  })
});

export const deleteHexarStandOutByIdValidation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required().messages({
      'any.required': 'id is required.',
      'string.empty': 'id cannot be empty.',
    }),
  })
});
