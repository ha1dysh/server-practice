const errors = {
  notFound: (_, res) => {
    res.status(404).json({ message: 'Not found' });
  },

  handler: (err, _, res, __) => {
    let { status = 500, message = 'Server Error' } = err;

    if (message.includes('"')) {
      message = message.replace(/"/g, '');
    }
    if (message === 'jwt expired') {
      return res.status(401).json({ message });
    }

    return res.status(status).json({ message });
  },
};

module.exports = errors;
