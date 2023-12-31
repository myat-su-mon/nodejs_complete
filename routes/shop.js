const express = require("express");

const shopController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// normal route | specific route
router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

// // dynamic segment
router.get("/products/:productId", isAuth, shopController.getProduct);

router.get("/cart", isAuth, shopController.getCart);

router.post("/cart", isAuth, shopController.postCart);

router.post(
  "/cart-delete-product",
  isAuth,
  shopController.postCartDeleteProduct
);

router.get("/orders", isAuth, shopController.getOrders);

router.post("/create-order", isAuth, shopController.postOrder);

router.get("/orders/:orderId", isAuth, shopController.getInvoice);

// router.get("/checkout", shopController.getCheckout);

module.exports = router;
