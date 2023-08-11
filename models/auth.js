const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  username: {
    type: String, // string -> String
    required: true,
    trim: true,
  },
  email: {
    type: String, // string -> String
    required: true,
    unique: true,
  },
  password: {
    type: String, // string -> String
    required: true,
  },
  date: {
    type: Date, // date -> Date
    default: new Date(),
  },
});

module.exports = mongoose.model("auth", AuthSchema);
