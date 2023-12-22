const Joi = require('joi');

exports.createBookSchema = Joi.object().keys({
    name: Joi.string().required(),
    author: Joi.string().required(),
});