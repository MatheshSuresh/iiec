import express from "express";
import {
  postProduct,
  getProducts,
  getProduct,
  deleteProduct,
  editProduct,
  getProductCategory,
  createProductReview,
} from "../controllers/productControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", protect, postProduct);

router.get("/search", getProductCategory);

router.get("/:id", getProduct);

router.route("/:id/reviews").post(protect, createProductReview);

router.delete("/:id", protect, admin, deleteProduct);

router.put("/:id", protect, admin, editProduct);

export default router;
