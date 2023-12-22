const Joi = require('joi');

exports.registerSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
});

exports.loginSchema = Joi.object().keys({    
    username: Joi.string().required(),
    password: Joi.string().required(),
});