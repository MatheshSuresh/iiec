import React from "react";
import styles from "../styles/productCart.module.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
const ProductCart = () => {
  return (
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
            489.00
          </div>
          <div className={styles.shipping_cost}>
            <span className={styles.money_sign_2}>৳</span>
            100 Shipping Cost
          </div>
          <div className={styles.add_to_cart}>
            <div className={styles.item_container}>
              <input type='text' className={styles.input} />
              <div className={styles.button_container}>
                <button className={styles.plus_btn}>+</button>
                <button className={styles.minus_btn}>-</button>
              </div>
            </div>
            <button className={styles.cart_btn}>ADD TO CART</button>
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
          <input type='text' placeholder='Enter Your Email' className={styles.email_input} />
          <div className={styles.subscribe_btn}>SUBSCRIBE</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
