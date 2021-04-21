const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/productsRouter");

mongoose.connect("mongodb://127.0.0.1:27017/product-model-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// config the server
const app = express();
app.use(express.json());
app.use(cors());

app.use(productsRouter);

app.use((req, res) => {
  res.status(404).send({ message: "no such request" });
});

// start listening
const PORT = process.env.PORT || 7887;
app.listen(PORT, () => console.log("listening!"));
