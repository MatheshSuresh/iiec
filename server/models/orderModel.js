import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      address: { type: String, required: true },
      address2: { type: String },
      division: { type: String, required: true },
      city: { type: String, required: true },
      zip: { type: String, required: true },
      country: { type: String },
      phone: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    onlinePayment: {
      phoneNumber: { type: String },
      txnId: { type: String },
    },

    cashOnDelivery: {
      type: Boolean,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentCharge: {
      type: Number,
      default: 0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    email: {
      type: String,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isCancelled: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
orderSchema.set("toJSON", {
  virtuals: true,
});
orderSchema.method("toClient", function () {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
