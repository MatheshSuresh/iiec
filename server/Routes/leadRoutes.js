import express from "express";
const router = express.Router();

import { protect, admin } from "../middleware/authMiddleware.js";

import {
    postLead, getLeads, postCard, getLeadcard
} from "../controllers/leadController.js";



router.post("/", postLead);

router.get("/", getLeads);

router.post('/card', postCard);

router.get('/carddata', getLeadcard)

// router.get("/admin/:id", protect, admin, adminGetUser);

// router.put("/admin/:id", protect, admin, adminEditUser);

// router.delete("/admin/:id", protect, admin, adminDeleteUser);

// router
//     .route("/profile")
//     .get(protect, getUserProfile)
//     .patch(protect, updateUserProfile);

// router.route("/register").post(registerUser);

export default router;
