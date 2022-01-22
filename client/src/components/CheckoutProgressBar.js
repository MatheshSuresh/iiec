import React from "react";

import { Link } from "react-router-dom";

import styles from "../components/styles/checkoutProgressBar.module.css";
import { ShoppingCart } from "@material-ui/icons";

export default function CheckoutProgressBar({ step1, step2, step3, step4 }) {
  return (
    <div className={styles.checkout_progress_bar}>
      <div className={styles.container}>
        <div className={styles.progress_wrapper}>
          <div className={styles.title}>
            Checkout <span className={styles.light}>(1 items)</span>
          </div>
          <div className={styles.progress_bar_container}>
            <div
              className={`${step1 ? styles.bar_active : styles.bar_deactive}`}
            >
              {step1 ? (
                <>
                  <div className={styles.progress_container}>
                    <span className={styles.progress_number}>1</span>
                    <span className={styles.progress_text}>SIGN IN</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.progress_container}>
                    <div className={styles.progress_container}>
                      <span className={styles.progress_number}>1</span>
                      <span className={styles.progress_text}>SIGN IN</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div
              className={`${step2 ? styles.bar_active : styles.bar_deactive}`}
            >
              {step2 ? (
                <>
                  <div className={styles.progress_container}>
                    <span className={styles.progress_number}>2</span>
                    <span className={styles.progress_text}>SHIPPING</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.progress_container}>
                    {/* <Link to='/shipping'> */}
                    <span className={styles.progress_number}>2</span>
                    {/* </Link> */}
                    {/* <Link to='/shipping'> */}
                    <span className={styles.progress_text}>SHIPPING</span>
                    {/* </Link> */}
                  </div>
                </>
              )}
            </div>
            <div
              className={`${step3 ? styles.bar_active : styles.bar_deactive}`}
            >
              {step3 ? (
                <>
                  <div className={styles.progress_container}>
                    <span className={styles.progress_number}>3</span>
                    <span className={styles.progress_text}>PAYMENT</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.progress_container}>
                    {/* <Link to='/payment'> */}
                    <span className={styles.progress_number}>3</span>
                    {/* </Link> */}
                    {/* <Link to='/payment'> */}
                    <span className={styles.progress_text}>PAYMENT</span>
                    {/* </Link> */}
                  </div>
                </>
              )}
            </div>
            <div
              className={`${step4 ? styles.bar_active : styles.bar_deactive}`}
            >
              {step4 ? (
                <>
                  <div className={styles.progress_container}>
                    <span className={styles.progress_number}>4</span>
                    <span className={styles.progress_text}>PLACE ORDER</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.progress_container}>
                    {/* <Link to='/place-order'> */}
                    <span className={styles.progress_number}>4</span>
                    {/* </Link> */}
                    {/* <Link to='/place-order'> */}
                    <span className={styles.progress_text}>PLACE ORDER</span>
                    {/* </Link> */}
                  </div>
                </>
              )}
            </div>
          </div>
          <button className={styles.edit_btn}>
            <Link to='/cart'>
              <ShoppingCart className={styles.edit_icons}></ShoppingCart> EDIT
              SHOPPING CART
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
