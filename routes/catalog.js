const express = require("express");
const router = express.Router();

const axios = require("../utils/baseAxiosClient");

async function getImages(productId) {
  const response = await axios.get(`catalog/products/${productId}/images`);

  return response?.data?.data;
}

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

// define the home page route
// router.get("/products", async (req, res) => {
//   try {
//     const response = await axios.get("catalog/products");
//     const products = await response?.data?.data;

//     res.status(200).send({
//       msg: "successful",
//       products,
//     });
//   } catch (error) {
//     res.status(400).send({ msg: error.message });
//   }
// });

router.get("/products", async (req, res) => {
  try {
    const response = await axios.get("catalog/products?include=images");
    const products = await response?.data?.data;
    // console.log(products[0]?.images);
    // const promises = products.map(
    //   (product) =>
    //     new Promise(async (resolve, reject) => {
    //       const images = await getImages(product.id);

    //       resolve(images);
    //     })
    // );

    // const values = await Promise.all(promises);

    // const data = products.map((product, index) => {
    //   return {
    //     ...product,
    //     images: values[index],
    //   };
    // });

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
    const response = await axios.get(`catalog/products/${productId}`);
    const data = await response?.data?.data;

    res.status(200).send({
      msg: "successful",
      product: data,
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

router.get("/products/:id/images", async (req, res) => {
  try {
    const productId = req.params.id;
    const response = await axios.get(`catalog/products/${productId}/images`);

    res.status(200).send({
      msg: "successful",
      images: response?.data?.data,
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = router;
