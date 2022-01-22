import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, saveShippingAddress } from "../actions/cartActions";
import { postCoupon } from "../actions/couponActions";

import Message from "../components/Message";
import styles from "../components/styles/checkoutShipping.module.css";
import CheckoutProgressBar from "../components/CheckoutProgressBar";
import { Add } from "@material-ui/icons";
export default function CheckoutShipping({ history }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState("");

  const coupons = useSelector((state) => state.coupons);
  const { success, error } = coupons;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [division, setDivision] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

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

  useEffect(() => {
    if (!userInfo) {
      history.push("/checkout-login");
    }

    if (shippingAddress) {
      setFirstName(shippingAddress.firstName);
      setLastName(shippingAddress.lastName);
      setAddress(shippingAddress.address);
      setAddress2(shippingAddress.address2);
      setCity(shippingAddress.city);
      setCountry("Bangladesh");
      setDivision(shippingAddress.division);
      setPhone(shippingAddress.phone);
      setZip(shippingAddress.zip);
    }
  }, [shippingAddress]);

  const promoSubmit = (e) => {
    e.preventDefault();

    dispatch(postCoupon(promo));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        firstName,
        lastName,
        address,
        address2,
        city,
        division,
        phone,
        zip,
      })
    );
    history.push("/checkout-payment");
  };
  return (
    <>
      <CheckoutProgressBar step1 step2></CheckoutProgressBar>
      <div className={styles.checkout_shipping}>
        {error && (
          <div className='alert-dark-container'>
            <Message id='cart-alert' variant='dark'>
              {"Coupon code did not match"}
            </Message>
          </div>
        )}
        <div className={styles.container}>
          <div className={styles.container_left}>
            <div className={styles.address_container}>
              <div className={styles.form_container}>
                <div className={styles.address_title}>Add Address</div>
                <form onSubmit={onSubmit} className={styles.address_form}>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>First Name</div>
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        type='text'
                        className={styles.input}
                        value={firstName}
                        required
                      />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Last Name</div>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        type='text'
                        className={styles.input}
                        value={lastName}
                        required
                      />
                    </div>
                  </div>
                  <div type='text' className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Country / Region</div>
                      <input
                        onChange={(e) => setCountry(e.target.value)}
                        type='text'
                        className={styles.input}
                        required
                        value={country}
                      />
                    </div>
                  </div>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Address</div>
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        type='text'
                        className={styles.input}
                        required
                        value={address}
                      />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>
                        Address 2 / Delivery Instruction
                      </div>
                      <input
                        onChange={(e) => setAddress2(e.target.value)}
                        type='text'
                        className={styles.input}
                        value={address2}
                      />
                    </div>
                  </div>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>City / Town</div>
                      <input
                        type='text'
                        onChange={(e) => setCity(e.target.value)}
                        className={styles.input}
                        required
                        value={city}
                      />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>State / Divison</div>
                      <input
                        onChange={(e) => setDivision(e.target.value)}
                        type='text'
                        className={styles.input}
                        required
                        value={division}
                      />
                    </div>
                  </div>
                  <div className={styles.input_container}>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Zip Code</div>
                      <input
                        required
                        onChange={(e) => setZip(e.target.value)}
                        type='text'
                        className={styles.input}
                        value={zip}
                      />
                    </div>
                    <div className={styles.input_wrapper}>
                      <div className={styles.input_name}>Phone</div>
                      <input
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        type='text'
                        className={styles.input}
                        value={phone}
                      />
                    </div>
                  </div>
                  <div className={styles.btn_container}>
                    <button className={styles.btn}>SAVE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className={`${styles.container_right} ${
              open ? styles.open_height_large : styles.open_height_small
            }`}
          >
            <div className={styles.summary_container}>
              <div className={styles.summary_wrapper}>
                <div className={styles.summary_title}>Summary</div>
                <div className={styles.summary_flex}>
                  <div className={styles.item_name}>
                    {" "}
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </div>
                  <div className={styles.item_price}>
                    ৳{" "}
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </div>
                </div>
                <div className={styles.summary_flex}>
                  <div className={styles.item_name}>Delivery Charge</div>
                  <div className={styles.item_price}>
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
                {/* Promo */}
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
                        <button className={styles.promo_apply_btn}>
                          APPLY
                        </button>
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
      </div>
    </>
  );
}
