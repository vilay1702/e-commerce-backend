const Product = require("../models/product");

const getProducts = async (req, res) => {
  // send array of products in response, if error then send empty array
  let response = [];
  try {
    response = await Product.find({});
    // console.log("GET PRODUCT API\n", response);
    if (response == {}) {
      res.status(404).send(response);
    }
  } catch (error) {
    console.log("\n\nError in getProducts\n", error);
    res.status(500).send(response);
  }
  res.status(200).send(response);
};

const createProduct = async (req, res) => {
  let response = [];
  try {
    const product = req.body;
    response = await Product.create({ ...product });
    if (response == {}) {
      res.status(404).json({ message: "Product not created" });
    }
  } catch (error) {
    console.log("\n\nError in create products\n", error);
    res.status(500).json({ message: "Internal server error" });
  }
  res.status(200).json({ data: response });
};

const deleteProduct = async (req, res) => {
  let response = [];
  try {
    const product = req.body;
    response = await Product.deleteOne({ ...product });
    if (response == {}) {
      res.status(404).json({ message: "Product not deleted" });
    }
  } catch (error) {
    console.log("\n\nError in delete products\n", error);
    res.status(500).json({ message: "Internal server error" });
  }
  res.status(200).json({ data: response });
};

const getSingleProduct = async (req, res) => {
  // send array of products in response, if error then send empty array
  let response = [];
  try {
    console.log(req.params);
    const id = req.params.id;
    response = await Product.findOne({ _id: id });
    console.log("GET SINGLE PRODUCT API\n", response);
    if (response == {}) {
      res.status(404).send(response);
    }
  } catch (error) {
    console.log("\n\nError in getSingleProduct\n", error);
    res.status(500).send(response);
  }
  res.status(200).send(response);
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  getSingleProduct,
};
