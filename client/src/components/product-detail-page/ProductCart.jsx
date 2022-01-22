import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions/cartActions";

import CartModal from "../../components/modals/CartModal";
import styles from "../styles/productCart.module.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const [numStock, setNumStock] = useState(1);
  if (numStock < 0) {
    setNumStock(0);
  }
  if (numStock > product.countInStock) {
    setNumStock((prev) => prev - 1);
  }
  // numstock = amount of qty user selected
  useEffect(() => {
    document.getElementById("cart-modal").style.display = "none";
  }, []);
  useEffect(() => {
    if (product.countInStock === 0) {
      setNumStock(0);
      document.getElementById("add-to-cart").disabled = true;
    }
  }, [product]);
  const addToCartHandler = () => {
    document.getElementById("cart-modal").style.display = "block";
    dispatch(addToCart(product._id, numStock));
  };
  const cartValueHandler = (e) => {};

  const hideModal = () => {
    document.getElementById("cart-modal").style.display = "none";
  };

  return (
    <>
      <div className={styles.cart_container}>
        <div className={styles.cart_box}>
          <div className={styles.top}>
            <div className={styles.soldby}>
              <span className={styles.light}>Sold By: </span>
              FR Store
            </div>
            <div className={styles.icon_box}>
              <LocalShippingIcon className={styles.icon}></LocalShippingIcon>
              <div className={styles.icon_title}>Shipped By FR Store</div>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.total}>
              <span className={styles.money_sign}>৳</span>
              {product.price}
            </div>
            <div className={styles.shipping_cost}>
              <span className={styles.money_sign_2}>৳</span>
              100 Shipping Cost
            </div>
            <div className={styles.add_to_cart}>
              <div className={styles.item_container}>
                <input
                  // type='number'
                  // onChange={cartValueHandler}
                  value={numStock}
                  className={styles.input}
                />
                <div className={styles.button_container}>
                  <button
                    onClick={() => setNumStock((count) => count + 1)}
                    className={styles.plus_btn}
                  >
                    +
                  </button>
                  <button
                    onClick={() => setNumStock((count) => count - 1)}
                    className={styles.minus_btn}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                onClick={addToCartHandler}
                id='add-to-cart'
                className={`${styles.cart_btn} ${styles.disabled}`}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.wish_list}>
              <Link to='#'>
                ADD TO WISHLIST
                <FavoriteIcon className={styles.fav_icon}></FavoriteIcon>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.news_letter_box}>
          <div className={styles.title}>SUSCRIBE TO OUR NEWSLETTER</div>
          <div className={styles.row}>
            <input
              type='text'
              placeholder='Enter Your Email'
              className={styles.email_input}
            />
            <div className={styles.subscribe_btn}>SUBSCRIBE</div>
          </div>
        </div>
      </div>
      <CartModal onDismiss={hideModal}></CartModal>
    </>
  );
};

export default ProductCart;
