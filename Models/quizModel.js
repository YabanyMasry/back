const mongoose = require('mongoose');
const schemaOptions = {
  timestamps: true,
};

const quizSchema = new mongoose.Schema(
  {
    quizId: {
      type: String,
      unique: true,
      required: true,
    },
    moduleId: {
      type: String,
      required: true,
    },
    questions: {
      type: [Object],
      required: true,
    },
  },
  schemaOptions
);

const responseSchema = new mongoose.Schema(
  {
    responseId: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    quizId: {
      type: String,
      required: true,
    },
    answers: {
      type: [Object],
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  schemaOptions
);

module.exports = {
  QuizModel: mongoose.model('QuizModel', quizSchema),
  ResponseModel: mongoose.model('ResponseModel', responseSchema),
};