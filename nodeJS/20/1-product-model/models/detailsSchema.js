const mongoose = require("mongoose");
const validator = require("validator");

const detailsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) throw "the price needs to be a positive number";
    },
  },
  discount: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw "the discount can't be less than 0";
    },
  },
  images: {
    type: [Buffer],
    required: true,
    validate(value) {
      if (value.length < 2) throw "you need to have at least 2 images";
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value, "he-IL")) throw "phone number must be IL phone";
    },
  },
  dateAdded: {
    type: Date,
    default: new Date(),
  },
});

module.exports = detailsSchema;
