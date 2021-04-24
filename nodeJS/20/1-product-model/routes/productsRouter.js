const express = require("express");

const Product = require("../models/product");

const productsRouter = new express.Router();

// create a product
productsRouter.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const productDoc = await product.save();
    res.status(201).send(productDoc);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all products or by filter
productsRouter.get("/api/products", async (req, res) => {
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
productsRouter.get("/api/products/price", async (req, res) => {
  try {
    const { min = 0, max = 10000 } = req.query;
    const products = await Product.find({ "details.price": { $gte: min, $lte: max } });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get a product by id
productsRouter.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// update a product
productsRouter.patch("/api/products/:id", async (req, res) => {
  const allowedFields = ["isActive", "details.discount"];
  const updateFields = Object.keys(req.body);
  const isValidField = updateFields.every((field) => allowedFields.includes(field));
  if (!isValidField) return res.status(400).send({ message: "Invalid field update attempt" });

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).send({ message: `no product with id ${req.params.id}` });
    return res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete a product by id
productsRouter.delete("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send({ message: `no product with id ${req.params.id}` });
    return res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete all products
productsRouter.delete("/api/products", async (req, res) => {
  try {
    const products = await Product.deleteMany({});
    if (!products) return res.status(404).send({ message: `no products` });
    return res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = productsRouter;
