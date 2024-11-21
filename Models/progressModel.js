const mongoose = require('mongoose');
const schemaOptions = {
  timestamps: true,
};

const progressSchema = new mongoose.Schema(
  {
    progressId: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    completionPercentage: {
      type: Number,
      required: true,
    },
    lastAccessed: {
      type: Date,
      required: true,
    },
  },
  schemaOptions
);

module.exports = mongoose.model('ProgressModel', progressSchema);