const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  r1Responses: {
    type: String,
    required: true
  },
  r2Responses: String,
  status: {
    type: String,
    enum: ['submitted', 'reviewed', 'rejected'],
    default: 'submitted'
  },
  appliedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);
