const express = require('express');
const { createUser, loginUser } = require('../controllers/auth.controller');
const { validate } = require('../validation');
const { createBook } = require('../controllers/book.controller');
const { createBookSchema } = require('../validation/schema/book.schema');
const { AdminAuthenticate } = require('../utils/AdminAuthenticate');
const router = express.Router();

router.post('/createbook', AdminAuthenticate, validate(createBookSchema), createBook);

module.exports = router;