import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import pdf from "html-pdf";
import { pdfTemp } from "../utils/html-pdf/pdfTemp.js";

export const addOrder = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    totalPrice,
    shippingPrice,
    paymentCharge,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Items");
  } else if (paymentCharge) {
    const order = new Order({
      orderItems,
      user: req.user._id,
      email: req.user.email,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paymentCharge,
    });

    const createOrder = await order.save();
    // pdf.create(pdfTemp(createOrder), {}).toFile("result.pdf", (err) => {
    //   if (err) {
    //     return Promise.reject();
    //   }
    //   return Promise.resolve();
    // });

    res.status(201).json(createOrder);
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      email: req.user.email,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    let copy = order;

    const createOrder = await order.save();

    res.json(createOrder);

    // pdf.create(pdfTemp(createOrder._id), {}).toFile("result.pdf", (err) => {
    //   if (err) {
    //     return Promise.reject();
    //   }
    //   return Promise.resolve();
    // });
  }
});

export const getMyOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

export const getMyOrder = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const order = await Order.findById(id).populate("user", "name email");
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export const getOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({}).populate("user", "id name image email");
  res.json(orders);
});

export const updateOrderToPaid = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.isCancelled = false;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

export const updateOrderToDelivered = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    order.isCancelled = false;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

export const updateToCancel = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isCancelled = true;
    order.isDelivered = false;
    order.isPaid = false;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});
