const { isValidObjectId } = require('mongoose');

const tryCatch = (func) => {
  return async (req, res, next) => {
    try {
      if (req.params.id && !isValidObjectId(req.params.id)) {
        return res.status(404).json({ message: 'incorrect id' });
      }
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = tryCatch;
