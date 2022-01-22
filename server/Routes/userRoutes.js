import express from "express";
const router = express.Router();

import { protect, admin } from "../middleware/authMiddleware.js";

import {
  authUser,
  getLogin,
  getUserProfile,
  registerUser,
  updateUserProfile,
  adminUserList,
  adminGetUser,
  adminEditUser,
  adminDeleteUser,
} from "../controllers/userController.js";

router.route("/").get(getLogin).post(authUser);

router.get("/admin", protect, admin, adminUserList);

router.get("/admin/:id", protect, admin, adminGetUser);

router.put("/admin/:id", protect, admin, adminEditUser);

router.delete("/admin/:id", protect, admin, adminDeleteUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);

router.route("/register").post(registerUser);

export default router;
