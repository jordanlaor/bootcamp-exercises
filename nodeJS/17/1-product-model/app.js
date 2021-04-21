const fs = require("fs");
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/product-model-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
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

const product1 = new Product({
  name: "doll",
  category: "toy",
  isActive: true,
  details: {
    description: "fluffy doll",
    price: 40,
    discount: 5,
    images: [fs.readFileSync("./image.jpeg"), fs.readFileSync("./image2.jpeg")],
    phoneNumber: "0548370861",
  },
});

const product3 = new Product({
  name: "lego",
  category: "toy",
  details: {
    description: "everyone loves lego",
    price: 100,
    discount: 10,
    images: [fs.readFileSync("./image.jpeg"), fs.readFileSync("./image2.jpeg")],
    phoneNumber: "+972523459721",
    dateAdded: new Date("01-01-2003"),
  },
});
const product4 = new Product({
  name: "cake",
  category: "dessert",
  details: {
    description: "for birthdays or just for fun",
    price: 130,
    discount: 15,
    images: [fs.readFileSync("./image.jpeg"), fs.readFileSync("./image2.jpeg")],
    phoneNumber: "0503459333",
    dateAdded: new Date("10-08-2020"),
  },
});
const product2 = new Product({
  name: "doll",
  category: "toy",
  isActive: true,
  details: {
    description: "fluffy doll",
    price: 30,
    images: [fs.readFileSync("./image.jpeg"), fs.readFileSync("./image2.jpeg")],
    phoneNumber: "+972523459721",
  },
});

product1
  .save()
  .then((ful) => console.log(ful))
  .catch((err) => console.log(err));
product2
  .save()
  .then((ful) => console.log(ful))
  .catch((err) => console.log(err));
product3
  .save()
  .then((ful) => console.log(ful))
  .catch((err) => console.log(err));
product4
  .save()
  .then((ful) => console.log(ful))
  .catch((err) => console.log(err));
