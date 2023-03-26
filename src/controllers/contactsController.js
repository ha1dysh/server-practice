const Contact = require('../models/contacts/mongoSchema');

const standardResponse = (result, res) =>
  result ? res.json(result) : res.status(404).json({ message: 'Not found' });

module.exports = {
  getList: async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const contacts = await Contact.find({ owner: _id }, '', {
      skip,
      limit: Number(limit),
    });
    res.json(contacts);
  },

  getById: async (req, res) => {
    const { params, user } = req;

    const result = await Contact.findById(params.id);
    if (!user._id.equals(result.owner)) {
      return res.status(404).json({ message: 'Not found' });
    }
    standardResponse(result, res);
  },

  add: async (req, res) => {
    const { _id } = req.user;
    const result = await await Contact.create({ ...req.body, owner: _id });
    res.status(201).json(result);
  },

  remove: async (req, res) => {
    const result = await Contact.findByIdAndRemove(req.params.id);
    standardResponse(result, res);
  },

  update: async (req, res) => {
    const result = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    standardResponse(result, res);
  },

  updateStatus: async (req, res) => {
    const result = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    standardResponse(result, res);
  },
};
