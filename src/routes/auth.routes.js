const express = require('express');
const { createUser } = require('../controllers/auth.controller');
const { validate } = require('../validation');
const { registerSchema, loginSchema } = require('../validation/schema/auth.schema');
const router = express.Router();

router.post('/register', validate(registerSchema), createUser);
router.post('/login', validate(loginSchema), createUser);

module.exports = router;