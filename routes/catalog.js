const express = require("express");
const router = express.Router();
const axios = require("../utils/baseAxiosClient");

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

router.get("/products", async (req, res) => {
  try {
    const response = await axios.get("catalog/products?include=images");
    const products = await response?.data?.data;

    res.status(200).send({
      msg: "successful",
      products,
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const response = await axios.get(
      `catalog/products/${productId}?include=images`
    );
    const data = await response?.data?.data;

    res.status(200).send({
      msg: "successful",
      product: data,
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = router;
