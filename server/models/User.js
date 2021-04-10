const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    validate: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
