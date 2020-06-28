const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Recipient must have a email'],
  },
  responded: {
    type: Boolean,
    default: false,
  },
});

const Recipient = mongoose.model('Recipient', recipientSchema);

module.exports = recipientSchema;
