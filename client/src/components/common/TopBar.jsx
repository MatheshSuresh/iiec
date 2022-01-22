import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/top-bar.module.css";
import { MailOutline, PhoneAndroid, Phone } from "@material-ui/icons";

const Header = () => {
  return (
    <>
      <div className={styles.top_bar}>
        <div className={styles.container}>
          <div className={styles.top_bar_left}>
            <div className={styles.top_bar_content}>
              <Phone className={styles.top_bar_icons} /> 01638418833
            </div>
            <div className={styles.top_bar_content}>
              <MailOutline className={styles.top_bar_icons} />{" "}
              <Link to='mailto:fahim1.618555@gmail.com'>
                fahim1.618555@gmail.com
              </Link>
            </div>
          </div>
          <div className={styles.top_bar_right}>
            <PhoneAndroid className={styles.top_bar_icons} /> Get Our App And
            Save Money
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
