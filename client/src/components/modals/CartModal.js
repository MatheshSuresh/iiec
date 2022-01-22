import React, { useState } from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import styles from "../styles/cartModal.module.css";
import "../../index.css";
import { Cancel, Remove, DeleteOutline, Add } from "@material-ui/icons";
import { removeFromCart, addToCart } from "../../actions/cartActions";

export default function CartModal({ onDismiss }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [numStock, setNumStock] = useState(1);

  if (numStock < 0) {
    setNumStock(0);
  }
  // if (numStock > product.countInStock) {
  //   setNumStock((prev) => prev - 1);
  // }

  const addQtyHandler = (id) => {
    // let count = 1;

    let res = cartItems.filter((item) => item.product === id);
    setNumStock((count) => count + 1);
    if (numStock + 2 > res[0].countInStock) {
      setNumStock((prev) => prev - 1);
    }
    dispatch(addToCart(id, numStock + 1));
  };
  const removeQtyHandler = (id) => {
    console.log(id);
  };

  const deleteHandler = () => {};

  const deleteCartItemHandler = (id) => {
    setNumStock(1);
    dispatch(removeFromCart(id));
  };
  return ReactDom.createPortal(
    <div
      onClick={onDismiss}
      id='cart-modal'
      style={{ height: "2000px" }}
      className='ui dimmer modals visible active'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          //   left: "80%",
          maxWidth: "420px",
          borderRadius: "0",
          height: "100%",
          top: "0",
          textAlign: "left",
          // position: "fixed",
          //   position: "sticky",
        }}
        className='ui standard cart_modal visible active'
      >
        <div className={styles.header_container}>
          <Cancel
            onClick={() =>
              (document.getElementById("cart-modal").style.display = "none")
            }
            className={styles.cross_icon}
          ></Cancel>
          <div className={styles.heading}>My List</div>
        </div>
        <div className={styles.product_container}>
          {cartItems.map((item) => (
            <div key={item._id} className={styles.content_container}>
              <div className={styles.img_container}>
                <img src={item.image} alt='cart_img' className={styles.img} />
              </div>
              <div className={styles.content_wrapper}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.product_price}>
                  ৳{item.price} x {item.qty}
                </div>
                <div className={styles.button_container}>
                  <button
                    onClick={() => removeQtyHandler(item.product)}
                    className={styles.button_minus}
                  >
                    <Remove></Remove>
                  </button>
                  <span className={styles.qty}>{item.qty}</span>
                  <button
                    onClick={() => addQtyHandler(item.product)}
                    className={styles.button_minus}
                  >
                    <Add></Add>
                  </button>
                </div>
              </div>
              <DeleteOutline
                onClick={() => deleteCartItemHandler(item.product)}
                className={styles.delete_item}
              ></DeleteOutline>
            </div>
          ))}

          <hr />
          <div className={styles.checkout_container}>
            <div className={styles.subtotal_container}>
              <div className={styles.text}>Subtotal</div>
              <div className={styles.subtotal}>
                ৳
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </div>
            </div>
            <div className={styles.total_container}>
              <div className={styles.text}>Total</div>
              <div className={styles.subtotal}>
                ৳
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </div>
            </div>
            <div className={styles.checkout_btn}>
              <button
                onClick={() => history.push("/cart")}
                className={styles.btn}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}

// left: 80%;
// position: absolute;
// width: 420px;
// border-radius: 0;
