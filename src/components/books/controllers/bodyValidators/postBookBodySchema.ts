import Joi from 'joi';

export const postBookBodySchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  date: Joi.date().required(),
  autor: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
});

export const updateBookBodySchema = Joi.object({
  id: Joi.number(),
  title: Joi.string().min(3).max(30),
  date: Joi.date(),
  autor: Joi.string(),
  description: Joi.string(),
  image: Joi.string(),
});
