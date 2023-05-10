const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  image: {
    type: String,
  },
  colors: {
    type: Array,
  },
  company: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  rating: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  shipping: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
