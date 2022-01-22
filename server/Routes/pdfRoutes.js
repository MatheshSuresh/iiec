import express from "express";
const router = express.Router();
import pdf from "html-pdf";
import { pdfTemp } from "../utils/html-pdf/pdfTemp.js";
import { admin } from "../middleware/authMiddleware.js";

import asyncHandler from "express-async-handler";

router.post(
  "/create-pdf",
  asyncHandler(async (req, res, next) => {
    // const id = req.params.id;

    if (req.body) {
      const { _id } = req.body;
      pdf
        .create(pdfTemp(req.body), {})
        .toFile(`invoices/invoice-${_id}.pdf`, (err) => {
          if (err) {
            return Promise.reject();
          }
          return Promise.resolve();
        });
    } else {
      throw new Error("No body found");
    }

    // next();
    // if (req.body) {
    // } else {
    //   throw new Error("No order has been found");
    // }

    // const couponExist = await Coupon.findOne({ coupon: id });
    // if (couponExist) {
    //   res.status(200);
    //   res.json({ success: true });
    // } else {
    //   res.status(404);
    //   throw new Error("Coupon did not matched");
    // }
  })
);

router.get("/create", (req, res, next) => {
  res.send("Success");
});

router.post("/create", admin, async (req, res, next) => {
  const { coupon } = req.body;
  const couponExist = await Coupon.findOne({ coupon: coupon });
  if (couponExist) {
    res.status(400);
    throw new Error("Coupon Already exist");
  }

  const createCoupon = await Coupon.create({
    coupon: coupon,
  });

  if (createCoupon) {
    res.status(201).json({
      status: "Coupon was created ",
    });
  } else {
    res.status(400);
    throw new Erorr("Invalid Coupon");
  }
});

export default router;
