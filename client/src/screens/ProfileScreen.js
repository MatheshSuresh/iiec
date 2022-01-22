import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/styles/profileScreen.module.css";
import { useSelector } from "react-redux";
import Message from "../components/Message";
import Loading from "../components/Loading";
import axios from "axios";
import { SaveAltSharp } from "@material-ui/icons";
const ProfileScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  // if (!userInfo) {
  //   history.push("/login");

  // }
  const { username, email } = userInfo;

  const cart = useSelector((state) => state.cart);

  const demoHandler = () => {
    axios
      .post("/api/pdf")
      .then(() =>
        axios.get("/api/pdf", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        SaveAltSharp(pdfBlob, "newPdf.pdf");
      });
  };
  return (
    <>
      <div className={styles.container}>
        {loading && <Loading></Loading>}
        {error && <Message></Message>}
        <div className={styles.row}>
          <div className={styles.col_1}>
            <div className={styles.title}>Orders</div>
            <Link to='/profile/orders'>
              <div className={styles.sub_title}>Order History</div>
            </Link>
            <Link to='#'>
              <div className={styles.sub_title}>Suscription Order</div>
            </Link>
            <Link to='/profile/orders'>
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
            <div className={styles.main_title}>ACCOUNT SETTINGS</div>
            <div className={styles.user_info_container}>
              <div className={styles.field_name}>
                Account Information{" "}
                <span className={styles.name}>{username}</span>{" "}
              </div>
              <button className={styles.btn}>EDIT</button>
            </div>

            <div className={styles.email}>{email}</div>
            <div className={styles.phone}>
              {cart.shippingAddress && cart.shippingAddress.phone}
            </div>
            <div className={styles.password_container}>
              <div className={styles.password}>
                Password <span className={styles.stars}>*********</span>{" "}
              </div>
              <button onClick={demoHandler} className={styles.btn}>
                EDIT
              </button>
            </div>
            <div className={styles.verify_container}>
              <div className={styles.verification}>
                2 Step Verification{" "}
                <span className={styles.security}>
                  Enable 2-Step Verification for enhanced account security.
                </span>{" "}
              </div>
              <button className={styles.btn_2}>ENABLE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
