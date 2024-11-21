const mongoose = require('mongoose');
const schemaOptions = {
  timestamps: true,
};

const moduleSchema = new mongoose.Schema(
  {
    moduleId: {
      type: String,
      unique: true,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    resources: {
      type: [String],
      default: [],
    },
  },
  schemaOptions
);

const courseSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    difficultyLevel: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

module.exports = {
  CourseModel: mongoose.model('CourseModel', courseSchema),
  ModuleModel: mongoose.model('ModuleModel', moduleSchema),
};