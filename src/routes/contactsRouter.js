const express = require('express');
const router = express.Router();

const { tryCatch, validation, auth } = require('../_middleware');
const joiSchema = require('../models/contacts/joiSchema');
const contacts = require('../controllers/contactsController');

router.get('/', auth, tryCatch(contacts.getList));
router.get('/:id', auth, tryCatch(contacts.getById));
router.post('/', auth, validation(joiSchema.post), tryCatch(contacts.add));
router.delete('/:id', auth, tryCatch(contacts.remove));
router.put('/:id', auth, validation(joiSchema.put), tryCatch(contacts.update));
router.patch(
  '/:id/favorite', auth, validation(joiSchema.patch), tryCatch(contacts.updateStatus)
);

module.exports = router;
