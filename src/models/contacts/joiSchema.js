const Joi = require('joi');

const joiSchema = {
  post: Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(3).max(30).required(),
    favorite: Joi.boolean(),
  }),

  put: Joi.object({
    name: Joi.string().min(3).max(30),
    email: Joi.string().min(3).max(30),
    phone: Joi.string().min(3).max(30),
  }).min(1),

  patch: Joi.object({
    favorite: Joi.boolean().required(),
  }),
};

module.exports = joiSchema;
