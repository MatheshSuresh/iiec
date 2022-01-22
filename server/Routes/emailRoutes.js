import express from "express";
const router = express.Router();

import nodemailer from "nodemailer";
import path from "path";

const __dirname = path.resolve();

import { admin } from "../middleware/authMiddleware.js";

import asyncHandler from "express-async-handler";

router.post(
  "/invoice",
  asyncHandler(async (req, res, next) => {
    const { email, id } = req.body;
    console.log(email, id);
    if (req.body) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "frstorebd@gmail.com",
          pass: "sunlite.1245209", // naturally, replace both with your real credentials or an application-specific password
        },
      });

      const mailOptions = {
        from: "frstorebd@gmail.com",
        to: email,
        subject: "Invoice",
        html: `<p>Your order has been successfully placed. Please download the invoice attached below. Thank you.</p>`,
        attachments: [
          {
            filename: `invoice-${id}.pdf`,
            path: path.join(__dirname, "invoices", `invoice-${id}.pdf`),
            contentType: "application/pdf",
          },
        ],
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    } else {
      throw new Error("No invoice found to nodemailer");
    }
  })
);

export default router;
