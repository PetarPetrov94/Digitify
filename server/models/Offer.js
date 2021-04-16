const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  productName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 40,
  },
  productDescription: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50,
  },
  productImage: {
    type: String,
    required: true,
    validate: /^https?/,
  },
  productType: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model("Offer", offerSchema);
