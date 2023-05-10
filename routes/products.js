const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/products");

router.route("/").get(getProducts).post(createProduct).delete(deleteProduct);
router.route("/:id").get(getSingleProduct);

module.exports = router;
