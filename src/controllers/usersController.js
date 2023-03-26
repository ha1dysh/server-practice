const User = require('../models/users/mongoSchema');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: 'Email in use' });
    }

    const newUser = new User({ email });
    newUser.setPassword(password);
    const result = await newUser.save();
    res.status(201).json({
      user: {
        email: result.email,
        subscription: 'starter',
      },
    });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: 'Email or password is wrong' });
    }

    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    await User.findByIdAndUpdate(user._id, { token });
    res.json({ token });
  },

  getCurrent: async (req, res) => {
    const { email, subscription } = req.user;
    res.json({ email, subscription });
  },

  logout: async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });
    res.status(204).json();
  },
};
