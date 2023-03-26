const express = require('express');
const router = express.Router();

const { auth, tryCatch, validation } = require('../_middleware');
const  joiSchema  = require('../models/users/joiSchema');
const users = require('../controllers/usersController');

router.post(
  '/register', validation(joiSchema.register), tryCatch(users.register)
);
router.post('/login', validation(joiSchema.login), tryCatch(users.login));
router.get('/logout', auth, tryCatch(users.logout));
router.get('/current', auth, tryCatch(users.getCurrent));

module.exports = router;
