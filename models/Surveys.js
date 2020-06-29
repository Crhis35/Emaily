const mongoose = require('mongoose');
const Recipient = require('./Recipients');

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Survey must have a title'],
  },
  body: {
    type: String,
    required: [true, 'Survey must have a body'],
  },
  subject: {
    type: String,
    required: [true, 'Survey must have a subject'],
  },
  recipients: [Recipient],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  dataSent: Date,
  lastResponded: Date,
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
