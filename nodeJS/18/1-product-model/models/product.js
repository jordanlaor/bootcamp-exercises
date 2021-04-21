const mongoose = require("mongoose");
const detailsSchema = require("./detailsSchema");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    // unique: true,
    async validate(value) {
      if (await Product.findOne({ name: value })) throw "name needs to be unique";
    },
  },
  category: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  details: {
    type: detailsSchema,
    required: true,
  },
});

module.exports = Product;
