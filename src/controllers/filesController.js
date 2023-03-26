const { unlink } = require('fs/promises');
const cloudinary = require('../services/cloudinary');

module.exports = {
  upload: async (req, res) => {
    const { path } = req.file;

    try {
      await cloudinary.uploader.upload(path, { folder: 'images' });
      unlink(path);
    } catch (error) {
      console.log(error);
      unlink(path);
    }

    res.json('Success');
  },
};
