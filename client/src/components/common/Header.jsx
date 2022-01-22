import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
import { logout } from "../../actions/userAction";

import styles from "../styles/header.module.css";
import {
  MenuOutlined,
  Search,
  PersonOutline,
  ShoppingCartOutlined,
  ArrowDropDown,
} from "@material-ui/icons";
import SearchBox from "./SearchBox";
const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload()
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [dropDown, setDropDown] = useState(false);

  const onMouseEnter = () => {
    setDropDown(true);
  };
  const onMouseLeave = () => {
    setDropDown(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_left}>
            <div className={styles.hambergur_menu}>
              <Link to='#'>
                <i className='fas fa-bars'></i>
              </Link>
            </div>
            {/* <MenuOutlined class={styles.header_icons_menu}></MenuOutlined> */}
            <Link to='/'>
              <img
                src='/images/logo.png'
                alt='Logo'
                className={styles.header_logo}
              />
            </Link>
            <div className={styles.search_box}>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.header_icon_account}>
              {userInfo ? (
                <Link
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className={styles.account_link}
                  to='/profile'
                >
                  <i
                    style={{ fontSize: "32px", paddingRight: "12px" }}
                    className='fas fa-user-circle big'
                  ></i>
                  <div className={styles.account}>
                    <div className={styles.welcome}>Welcome</div>
                    <div className={styles.content}>
                      {userInfo ? userInfo.username : "user"}
                      <ArrowDropDown></ArrowDropDown>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className={styles.account_link}
                  to='/'
                >
                  <i
                    style={{ fontSize: "32px", paddingRight: "12px" }}
                    className='fas fa-user-circle big'
                  ></i>
                  <div className={styles.account}>
                    <div className={styles.welcome}>Welcome</div>
                    <div className={styles.content}>
                      {userInfo ? userInfo.username : "user"}
                      <ArrowDropDown></ArrowDropDown>
                    </div>
                  </div>
                </Link>
              )}

              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={`${styles.account_collaspe_container} ${
                  !dropDown ? styles.close : ""
                } ${!userInfo && styles.hide}`}
              >
                <ul
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className={styles.collaspe_menu}
                >
                  <Link to='/profile' className='flex-space'>
                    <li className={styles.menu_item}>My Account</li>
                  </Link>
                  <Link to='/profile/orders' className='flex-space'>
                    <li className={styles.menu_item}>Order History</li>
                  </Link>
                  <Link to='/profile/track-order' className='flex-space'>
                    <li className={styles.menu_item}>Track Order</li>
                  </Link>
                  <Link to='#'>
                    <li onClick={handleLogout} className={styles.menu_item}>
                      Logout
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className={styles.header_icon_content}>
              <Link to='/cart'>
                <ShoppingCartOutlined class={styles.header_icons} />
              </Link>
              <Link className={styles.cart_link} to='/cart'>
                Cart{" "}
                <span
                  className={`${styles.cart_no} ${
                    cartItems.length === 0 && styles.hide
                  }`}
                >
                  {cartItems && cartItems.length}
                </span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
