import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myOrders } from "../actions/orderActions";

import { Search } from "@material-ui/icons";
import styles from "../components/styles/profileScreen.module.css";

const TrackOrderScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [tracker, setTracker] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/profile/order/${tracker}`);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_1}>
            <div className={styles.title}>Orders</div>
            <Link to='/profile/orders'>
              <div className={styles.sub_title}>Order History</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Suscription Order</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Return Status</div>
            </Link>
            <div className={styles.title}>Manage Account</div>
            <Link to='/profile'>
              <div className={styles.sub_title}>Account Settings</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Address</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Payment Options</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>My Reviews</div>
            </Link>
            <div className={styles.title}>Notification</div>
            <Link to='#'>
              <div className={styles.sub_title}>Email Notification</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Mobile Text Alert</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Price Alert</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Seller Messages</div>
            </Link>
          </div>
          <div className={styles.col_2}>
            <div className={styles.main_title}>TRACK MY ORDER </div>
            <div className={styles.search_box}>
              <form className={styles.search_form} onSubmit={submitHandler}>
                <input
                  className={styles.search_input}
                  type='text'
                  name='q'
                  placeholder='Track Your Order....'
                  onChange={(e) => setTracker(e.target.value)}
                />
                <button className={styles.search_button} type='submit'>
                  <Search className={styles.search_icon} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderScreen;
