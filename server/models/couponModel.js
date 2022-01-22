import mongoose from "mongoose";

const couponSchema = mongoose.Schema({
  coupon: {
    type: String,
    required: true,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
