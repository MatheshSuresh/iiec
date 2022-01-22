import express from "express";
const router = express.Router();

import {
  getMyOrders,
  addOrder,
  getOrders,
  getMyOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
  updateToCancel,
} from "../controllers/orderControllers.js";

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrder);

router.post("/admin/pay/:id", updateOrderToPaid);
// router.route("/pay/:id").post(protect, updateOrderToPaid);

router.route("/admin/deliver/:id").put(updateOrderToDelivered);

router.route("/admin/cancel/:id").put(updateToCancel);

router.route("/all").get(protect, getOrders);

router.route("/myorder").get(protect, getMyOrders);

router.route("/myorder/:id").get(protect, getMyOrder);

export default router;
