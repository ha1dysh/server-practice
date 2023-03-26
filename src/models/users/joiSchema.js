const Joi = require('joi');

const joiSchema = {
  register: Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
    subscription: Joi.string().valid('starter', 'pro', 'business'),
    token: Joi.string(),
  }),

  login: Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
    subscription: Joi.string().valid('starter', 'pro', 'business'),
    token: Joi.string(),
  }),
};

module.exports = joiSchema;
