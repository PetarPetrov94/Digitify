const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
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
