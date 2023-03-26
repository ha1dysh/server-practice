const express = require('express');
const router = express.Router();

const { tryCatch, upload, auth } = require('../_middleware');
const files = require('../controllers/filesController');

router.post('/upload', auth, upload.single('avatar'), tryCatch(files.upload));
router.use('/download', express.static('temp'));

module.exports = router;
