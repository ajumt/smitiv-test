const express = require("express");
const router = express.Router();
const { getProductList } = require("../controllers/product.controller")
const { getCartProducts, addToCart } = require("../controllers/cart.controller")

router.get("/products",getProductList);
router.get("/cart",getCartProducts);
router.post("/cart",addToCart);

module.exports = router;