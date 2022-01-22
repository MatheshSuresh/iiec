import express from "express";
import { postContact } from "../controllers/contactControllers.js";

const router = express.Router();

router.post("/", postContact);

export default router;
