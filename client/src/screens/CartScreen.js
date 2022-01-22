import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCoupon } from "../actions/couponActions";

import styles from "../components/styles/cartScreen.module.css";
import { DeleteOutline, Favorite, Add, PlayArrow } from "@material-ui/icons";
import {
  addToCart,
  removeAllFromCart,
  removeFromCart,
} from "../actions/cartActions";
import Message from "../components/Message";
export default function CartScreen({ history }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState("");

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const coupons = useSelector((state) => state.coupons);
  const { success, error } = coupons;

  let subtotal = cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  let deliveryCharge = subtotal > 1000 ? 60 : 130;

  let discount = 0;
  if (success) {
    discount = Number(subtotal * 0.1);
  }

  console.log(discount);
  useEffect(() => {
    if (cartItems.length === 0) {
      document.getElementById("secure-checkout").disabled = true;
    }
  }, [cartItems, coupons, dispatch]);
  const promoSubmit = (e) => {
    e.preventDefault();

    dispatch(postCoupon(promo));
  };
  const CheckoutHandler = () => {
    history.push("/checkout-login");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.main_title_container}>
            <div className={styles.total_item_container}>
              Shipping Cart{" "}
              <span className={styles.light}>({cartItems.length})</span>
            </div>
            <button
              onClick={() => dispatch(removeAllFromCart())}
              className={styles.remove_all_btn}
            >
              <DeleteOutline className={styles.icon}></DeleteOutline>
              REMOVE ALL
            </button>
          </div>
          {cartItems.length === 0 && (
            <div className='alert-dark-container'>
              <Message id='cart-alert' variant='dark'>
                {"Cart Is empty"}
              </Message>
            </div>
          )}
          {error && (
            <div className='alert-dark-container'>
              <Message id='cart-alert' variant='dark'>
                {"Coupon code did not match"}
              </Message>
            </div>
          )}
          {cartItems.map((item) => (
            <div key={item.product} className={styles.row}>
              <div className={styles.col_1}>
                <div className={styles.image_container}>
                  <img src={item.image} alt='' className={styles.img} />
                </div>
              </div>

              <div className={styles.col_2}>
                <div className={styles.sub_row_1}>
                  <div className={styles.product_name}>{item.name}</div>
                  <div className={styles.qty_container}>
                    <div className={styles.qty_box}>
                      <form className={styles.qty_form}>
                        <select
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                          className={styles.qty}
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </form>
                    </div>
                    <div className={styles.stock}>
                      Stock: {item.countInStock}
                    </div>
                  </div>
                  <div className={styles.product_price}>
                    {" "}
                    {item.price} x {item.qty} = ৳
                    {(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
                <div className={styles.sub_row_2}>
                  <button className={styles.wish_list_btn}>
                    <Favorite className={styles.icon}></Favorite>
                    MOVE TO WISHLIST
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(item.product))}
                    className={styles.remove_product_btn}
                  >
                    <DeleteOutline className={styles.icon}></DeleteOutline>
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.right_container}>
          <div className={styles.cart_box}>
            <div className={styles.cart_title}>Summary</div>
            <div className={styles.cart_item}>
              <div className={styles.light_text}>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </div>
              <div className={styles.items_price}>
                ৳
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </div>
            </div>
            <div className={styles.cart_delivery}>
              <div className={styles.delivery_text}>Delivery Charge</div>
              <div className={styles.items_price}>
                ৳{subtotal > 1000 ? 80 : 130}
              </div>
            </div>
            <div className={styles.cart_tax}>
              <div className={styles.tax_text}>Tax Amount</div>
              <div className={styles.items_price}>
                ৳{(subtotal * 0.025).toFixed(2)}
              </div>
            </div>
            {/* Promo Section */}
            {success && (
              <div className={styles.cart_tax}>
                <div className={styles.tax_text}>Coupon Discount</div>
                <div className={styles.items_price}>
                  -৳{(subtotal * 0.1).toFixed(2)}
                </div>
              </div>
            )}

            <div
              className={`${styles.promo_section} ${
                open ? styles.open_height_large : styles.open_height_small
              }`}
            >
              <div
                className={`${styles.promo_1st_part} ${success && styles.grey}`}
              >
                <div onClick={() => setOpen(!open)} className={styles.promo}>
                  APPLY PROMO CODE
                </div>
                <div
                  onClick={() => setOpen(!open)}
                  className={styles.promo_plus_btn}
                >
                  <Add className={styles.plus_icon}></Add>
                </div>
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
                      onChange={(e) => setPromo(e.target.value)}
                      type='text'
                      className={styles.promo_input}
                    />
                    <button className={styles.promo_apply_btn}>APPLY</button>
                  </form>
                </div>
              )}
            </div>
            <div className={styles.total_price_section}>
              <div className={styles.total_price_text}>Est. Total:</div>
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
            <div className={styles.checkout_container}>
              <button
                onClick={CheckoutHandler}
                id='secure-checkout'
                className={styles.secure_payment}
              >
                SECURE CHECKOUT
                <PlayArrow className={styles.arrow_icon}></PlayArrow>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
