const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  favorite: { type: Boolean, default: false },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const errorHandler = (error, _, next) => {
  next(error);
};
contactSchema.post('save', errorHandler);
const Contact = model('contact', contactSchema);

module.exports = Contact;
