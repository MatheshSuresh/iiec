import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/header-bottom.module.css";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userAction";
import { dropdown } from "../../actions/dropdownActions";

import { KeyboardArrowDownOutlined } from "@material-ui/icons";

const HeaderBottom = () => {
  const [bol, setBol] = useState(true);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const drop = useSelector((state) => state.drop);
  const { hide } = drop;

  const dropDownHandler = () => {
    console.log("clicked");
    setBol(!bol);
    dispatch(dropdown(bol));
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_left}>
          <div className={styles.header_collaspe}>
            <div
              onClick={dropDownHandler}
              className={`${styles.drop_down} ${
                hide ? "dropdown_hide" : "dropdown_show"
              }`}
              className={styles.title}
            >
              CATEGORIES
            </div>
            <KeyboardArrowDownOutlined className={styles.down_icon} />
          </div>
          <div className={styles.regular_link}>
            <Link to='/shop'>Shop</Link>
            <Link to='#'>New Arrival</Link>
            <Link to='#'>Hot Deals</Link>
            <Link to='/contact-us'>Contact Us</Link>
          </div>
        </div>
        <div className={styles.header_right}>
          {localStorage.getItem("userInfo") ? (
            ""
          ) : (
            <>
              <Link to='/'>Sign In</Link>
              <Link to='/sign-up'>Join</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
