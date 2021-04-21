const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const Product = require("./models/product");

mongoose.connect("mongodb://127.0.0.1:27017/product-model-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// config the server
const app = express();
app.use(express.json());
app.use(cors());

// create a product
app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const productDoc = await product.save();
    res.status(201).send(productDoc);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all products or by filter
app.get("/api/products", async (req, res) => {
  try {
    const query = {};
    for (const param in req.query) {
      query[param] = req.query[param];
    }
    const products = await Product.find(query);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get products by price range
app.get("/api/products/price", async (req, res) => {
  try {
    const { min = 0, max = 10000 } = req.query;
    const products = await Product.find({ "details.price": { $gte: min, $lte: max } });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get a product by id
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// start listening
const PORT = process.env.PORT || 7887;
app.listen(PORT, () => console.log("listening!"));
