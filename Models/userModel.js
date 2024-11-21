const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const schemaOptions = {
  timestamps: true,
};

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      required: true,
    },
    profilePictureUrl: {
      type: String,
      default: null,
    },
  },
  schemaOptions
);

// Apply the auto-increment plugin to userSchema
userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

module.exports = mongoose.model('UserModel', userSchema);