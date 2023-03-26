const { join, resolve } = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const tempDir = join(resolve(), 'temp');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split('.');
    cb(null, `${uuidv4()}.${extension}`);
  },
  limits: {
    fileSize: 2048,
  },
});

const upload = multer({ storage });

module.exports = upload;
