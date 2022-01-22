import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, savePaymentMethod } from "../actions/cartActions";

import { postCoupon } from "../actions/couponActions";

import Message from "../components/Message";
import styles from "../components/styles/checkoutShipping.module.css";
import "../components/styles/checkoutPayment.css";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { Add } from "@material-ui/icons";
export default function CheckoutPayment({ history }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const coupons = useSelector((state) => state.coupons);
  const { success, error } = coupons;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  let subtotal = cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  let deliveryCharge = subtotal > 1000 ? 60 : 130;

  let discount = 0;
  if (success) {
    discount = Number(subtotal * 0.1);
  }

  let total = (
    Number(subtotal * 0.025) +
    Number(subtotal) +
    Number(deliveryCharge)
  ).toFixed(2);

  let estTotal = (Number(total * 0.0185) + Number(total)).toFixed(2);

  console.log(estTotal);

  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const [bkash, setBkash] = useState(false);
  const [rocket, setRocket] = useState(false);
  const [cash, setCash] = useState(false);
  const [credit, setCredit] = useState(false);
  const [message, setMessage] = useState("");

  const promoSubmit = (e) => {
    e.preventDefault();
  };
  const onBkash = () => {
    setMessage("");
    setBkash(true);
    setRocket(false);
    setCash(false);
    setCredit(false);
  };
  const onRocket = () => {
    setMessage("");
    setBkash(false);
    setRocket(true);
    setCash(false);
    setCredit(false);
  };
  const onCredit = () => {
    setMessage("");
    setBkash(false);
    setRocket(false);
    setCash(false);
    setCredit(true);
  };
  const onCash = () => {
    setMessage("");
    setBkash(false);
    setRocket(false);
    setCash(true);
    setCredit(false);
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/checkout-login");
    }
    if (!shippingAddress) {
      history.push("/checkout-shipping");
    }
    if (paymentMethod) {
      if (paymentMethod.method === "bKash") {
        setBkash(paymentMethod.method);
      } else if (paymentMethod.method === "Rocket") {
        setRocket(paymentMethod.method);
      } else if (paymentMethod.method === "Credit") {
        setCredit(paymentMethod.method);
      } else if (paymentMethod.method === "Cash on Delivery") {
        setCash(paymentMethod.method);
      }
    }
  }, [paymentMethod]);

  const handleClick = () => {
    if (bkash) {
      dispatch(savePaymentMethod({ method: "bKash" }));
    } else if (rocket) {
      dispatch(savePaymentMethod({ method: "Rocket" }));
    } else if (cash) {
      dispatch(savePaymentMethod({ method: "Cash on Delivery" }));
    }

    if (bkash || rocket || cash) {
      history.push("/checkout-placeorder");
    } else {
      setMessage("Please Select a Valid Payment Method");
    }
  };
  return (
    <>
      <CheckoutProgressBar step1 step2 step3></CheckoutProgressBar>
      <div className={styles.checkout_shipping}>
        <div className={styles.container}>
          <div className={styles.container_left}>
            <div className={styles.address_container}>
              <div className={styles.form_container}>
                {message && <Message variant='dark'>{message}</Message>}
                <div className={styles.address_title}>
                  Select Payment Method
                </div>
                <div>
                  <div
                    className={`${styles.input_container} payment_container mt-4`}
                  >
                    <div
                      onClick={onCredit}
                      className={`payment_img_container ${
                        credit ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className='payment_img_wrapper'>
                        <img
                          src='/images/TB1qIthr67nBKNjSZLeXXbxCFXa-80-80.png'
                          alt='credit / debid card'
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>
                        Credit / Debid Card
                      </div>
                    </div>
                    <div
                      onClick={onRocket}
                      className={`payment_img_container ${
                        rocket ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className={`payment_img_wrapper `}>
                        <img
                          src='/images/Rocket.png'
                          alt='rocket_payment'
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>Rocket</div>
                    </div>
                    <div
                      onClick={onBkash}
                      className={`payment_img_container ${
                        bkash ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className='payment_img_wrapper'>
                        <img
                          src='/images/bKash.png'
                          alt='bkash payment'
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>
                        Save Money with bKash
                      </div>
                    </div>
                    <div
                      onClick={onCash}
                      className={`payment_img_container ${
                        cash ? "payment_img_active" : "payment_img_inactive"
                      }`}
                    >
                      <div className='payment_img_wrapper'>
                        <img
                          src='/images/TB1utb_r8jTBKNjSZFwXXcG4XXa-80-80.png'
                          alt=''
                          className='payment_img'
                        />
                      </div>
                      <div className='payment_img_title'>Cash on Delivery</div>
                    </div>
                  </div>
                  <div
                    className={`payment_description_container ${
                      bkash ? "content_show" : "content_hide"
                    }`}
                  >
                    <div className='payment_description'>
                      You have selected bKash as your payment method
                    </div>
                    {/* <form className='payment_method_form'>
                      <div className='flex-col'>
                        <label className='payment_input_label'>
                          Your bKash Account Number
                        </label>
                        <input type='text' className='payment_input' />
                      </div>
                      <div className='flex-col'>
                        <label className='payment_input_label'>
                          bKash Transaction ID
                        </label>
                        <input type='text' className='payment_input' />
                      </div>
                    </form> */}
                  </div>
                  <div
                    className={`payment_description_container ${
                      rocket ? "content_show" : "content_hide"
                    }`}
                  >
                    <div className='payment_description'>
                      You have selected Rocket as your payment Method
                    </div>
                  </div>
                  {/* Cash On Delivery Conent after clicking at the cash on delivery icon */}
                  <div
                    className={`payment_description_container ${
                      cash ? "content_show" : "content_hide"
                    }`}
                  >
                    <div className='payment_description'>
                      You have selected Cash on Delivery system
                    </div>
                  </div>
                  <div
                    className={`payment_description_container ${
                      credit ? "content_show" : "content_hide"
                    }`}
                  >
                    {/* Credit / Debid Conent after clicking at the cash on Credit or Debid */}
                    <div className='payment_description'>Comming Soon.....</div>
                  </div>
                  <div className={styles.btn_container}>
                    <button onClick={handleClick} className={styles.btn}>
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.container_right} ${
              open ? styles.open_height_large : styles.open_height_small
            }`}
          >
            <div className={styles.summary_container}>
              <div className={styles.summary_title}>Summary</div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Items</div>
                <div className={styles.item_price}>
                  {" "}
                  ৳{" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </div>
              </div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Delivery Charge</div>
                <div className={styles.item_price}>
                  {" "}
                  ৳{subtotal > 1000 ? 80 : 130}
                </div>
              </div>
              <div className={styles.summary_flex}>
                <div className={styles.item_name}>Tax Charge</div>
                <div className={styles.item_price}>
                  {" "}
                  ৳{(subtotal * 0.025).toFixed(2)}
                </div>
              </div>
              {success && (
                <div className={styles.summary_flex}>
                  <div className={styles.item_name}>Coupon Discount</div>
                  <div className={styles.item_price}>
                    -৳{(subtotal * 0.1).toFixed(2)}
                  </div>
                </div>
              )}
              <div
                className={`${styles.promo_container} ${
                  success && styles.grey
                }`}
              >
                <div className={styles.promo_flex}>
                  {success ? (
                    <div className={styles.promo}>APPLY PROMO CODE</div>
                  ) : (
                    <div
                      onClick={() => setOpen(!open)}
                      className={styles.promo}
                    >
                      APPLY PROMO CODE
                    </div>
                  )}

                  {success ? (
                    <div className={styles.plus_btn}>
                      <Add className={styles.add_icon}></Add>
                    </div>
                  ) : (
                    <div
                      onClick={() => setOpen(!open)}
                      className={styles.plus_btn}
                    >
                      <Add className={styles.add_icon}></Add>
                    </div>
                  )}
                </div>
                {success ? (
                  ""
                ) : (
                  <div className={styles.promo_code_container}>
                    <form
                      onSubmit={promoSubmit}
                      className={`${styles.promo_form} ${
                        open ? styles.show : styles.hide
                      }`}
                    >
                      <input
                        type='text'
                        onChange={(e) => setPromo(e.target.value)}
                        className={styles.promo_input}
                      />
                      <button className={styles.promo_apply_btn}>APPLY</button>
                    </form>
                  </div>
                )}
              </div>
              <div className={styles.total_flex}>
                <div className={styles.total_title}>Est.Total:</div>
                <div className={styles.total_price}>
                  {success ? (
                    <div className={styles.total_price_value}>
                      ৳
                      {(
                        Number(subtotal * 0.025) +
                        Number(subtotal) +
                        Number(deliveryCharge) -
                        Number(discount)
                      ).toFixed(2)}
                    </div>
                  ) : (
                    <div className={styles.total_price_value}>
                      ৳
                      {(
                        Number(subtotal * 0.025) +
                        Number(subtotal) +
                        Number(deliveryCharge)
                      ).toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
