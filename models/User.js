const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', useSchema);
module.exports = User;
// This code defines a Mongoose schema and model for a User entity.