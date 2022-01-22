import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myOrders } from "../actions/orderActions";

import styles from "../components/styles/profileScreen.module.css";
import classes from "../components/styles/userOrderListScreen.module.css";

import Loading from "../components/Loading";
import Message from "../components/Message";

const UserOrderListScreen = () => {
  const dispatch = useDispatch();
  const myOrderList = useSelector((state) => state.myOrderList);
  const { order, loading, error } = myOrderList;

  useEffect(() => {
    dispatch(myOrders());
  }, []);
  console.log(order);
  if (order) console.log(order.isPaid);
  return (
    <>
      <div className={styles.container}>
        {loading && <Loading></Loading>}
        {error && <Message>{error}</Message>}
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
            <div className={styles.main_title}>MY ORDER LIST</div>
            {order && order.isPaid && "paid"}
            <div className={classes.row_container}>
              {order &&
                order.map((item) => (
                  <div className={classes.row}>
                    <div className={classes.header_container}>
                      <div className={classes.order_id}>
                        Order :
                        <Link to={`/profile/order/${item._id}`}>
                          <span className={classes.bold}>#{item._id}</span>
                        </Link>
                      </div>
                      <Link
                        className={classes.view_order}
                        to={`/profile/order/${item._id}`}
                      >
                        VIEW DETAILS
                      </Link>
                      <div className={classes.order_stat}>
                        <span
                          className={`${classes.status} ${
                            item.isPaid && classes.paid
                          } ${item.isDelivered && classes.delivered} ${
                            item.isCancelled && classes.cancel
                          }`}
                        >
                          {item.isCancelled
                            ? "Cancelled"
                            : item.isPaid
                            ? item.isDelivered
                              ? "Complete"
                              : "Processing"
                            : "Pending"}
                        </span>
                      </div>
                    </div>
                    {item.orderItems.map((prod) => (
                      <div className={classes.order_container}>
                        <div className={classes.img_container}>
                          <img
                            src={prod.image}
                            alt=''
                            className={classes.img}
                          />
                        </div>
                        <div className={classes.text}>{prod.name}</div>
                        <div className={classes.qty}>Qty: {prod.qty} </div>
                        <div className={classes.status_container}></div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrderListScreen;
