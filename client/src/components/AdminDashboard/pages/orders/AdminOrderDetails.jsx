import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  myOrderDetails,
  payOrder,
  deliverOrder,
  cancelOrder,
} from "../../../../actions/orderActions";
import { useParams } from "react-router-dom";
import styles from "../../../../components/styles/orderScreen.module.css";

import Loading from "../../../../components/Loading";
import Message from "../../../../components/Message";

import "./adminOrderDetails.css";
const AdminOrderDetails = () => {
  let { id } = useParams();

  const [value, setValue] = useState("Payment Pending");

  let prodTotalPrice;
  const dispatch = useDispatch();

  const myOrder = useSelector((state) => state.myOrder);
  const { order, loading, error } = myOrder;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    order: orderPayment,
    loading: loadingPay,
    error: errorPay,
  } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    order: orderDelivered,
    loading: deliverLoading,
    error: deliverError,
  } = orderDeliver;

  const orderCancel = useSelector((state) => state.orderCancel);
  const {
    order: orderCancelled,
    loading: cancelLoading,
    error: cancelError,
  } = orderCancel;

  const [deliverd, setDeliverd] = useState(false);
  const [shipped, setShipped] = useState(false);

  useEffect(() => {
    if (order) {
      if (order.isPaid) {
        setValue("Payment Confirmed. Waiting For Delivery");
      }

      if (order.isDelivered && order.isDelivered) {
        setValue("Delivered");
      }
      if (order.isCancelled) {
        setValue("Cancelled");
      }
    }
  }, [
    dispatch,
    orderPayment,
    errorPay,
    orderDelivered,
    deliverError,
    orderCancelled,
    cancelError,
  ]);

  // useEffect(() => {
  //   if (order) {
  //     if (order.isPaid) {
  //       setShipped(true);
  //     }
  //     if (order.isDelivered) {
  //       setDeliverd(true);
  //     }
  //   }
  // }, [order]);

  let firstName;
  let lastName;
  let address;
  let city;
  let division;
  let phone;
  let zip;
  if (order) {
    const { shippingAddress } = order;
    firstName = shippingAddress.firstName;
    lastName = shippingAddress.lastName;
    address = shippingAddress.address;
    city = shippingAddress.city;
    division = shippingAddress.division;
    phone = shippingAddress.phone;
    zip = shippingAddress.zip;
  }

  useEffect(() => {
    dispatch(myOrderDetails(id));
  }, [dispatch]);

  if (order) {
    prodTotalPrice = order.orderItems.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
  }

  const handleInput = (e) => {
    setValue(e.target.value);
    if (e.target.value === "cancelled") {
      dispatch(cancelOrder(id));
    } else if (e.target.value === "delivered") {
      dispatch(deliverOrder(id));
    } else if (e.target.value === "completed") {
      dispatch(payOrder(id));
      dispatch(deliverOrder(id));
      console.log("completed");
    } else if (e.target.value === "processing") {
      console.log("ok");
      dispatch(payOrder(id));
    }
  };

  return (
    <div className='admin_order_detail'>
      <div
        style={{ paddingBottom: "200px" }}
        className={`${styles.order_screen} admin_order_detail_wrapper`}
      >
        {loading && <Loading></Loading>}
        {error && <Message>{error}</Message>}
        <div
          //
          className={styles.order_screen_container}
        >
          <div style={{ marginLeft: "175px" }} className={styles.main_title}>
            ORDER DETAILS
          </div>
          <div
            style={{ justifyContent: "center" }}
            className={styles.container}
          >
            <div className={styles.right_container}>
              <div className={styles.right_top}>
                <div className={styles.order_id}>
                  Orders: #{order && order._id}
                </div>
                <div className={styles.total_price}>
                  Total:{" "}
                  <span className={styles.bold}>
                    {" "}
                    ৳ {order && order.totalPrice}
                  </span>
                </div>
              </div>
              <div className={styles.right_main}>
                <div className='admin_order_status_container'>
                  <div className='admin_order_status'>
                    <span className='admin_status'>Status:</span>
                    <span className='admin_status_value'>
                      {order && value}
                      {/* {order && order.isPaid
                        ? order.isDelivered
                          ? "Delivered"
                          : "Payment Confirmed. Waiting For Delivery"
                        : "Payment Pending"} */}
                    </span>
                  </div>
                  <div className='order_select_container'>
                    <form className='order_admin_form'>
                      <select
                        onChange={handleInput}
                        className='order_admin_select'
                      >
                        <option value='pending'>Payment Pending</option>
                        <option value='processing'>Processing</option>
                        <option value='completed'>Completed</option>
                        <option value='cancelled'>Cancelled</option>
                        <option value='delivered'>Delivered</option>
                      </select>
                    </form>
                  </div>
                  <div className='admin_order_submit_btn_container'>
                    <button className='admin_order_submit_btn'>Submit</button>
                  </div>
                </div>
                <div className={styles.order_list_container}>
                  {order &&
                    order.orderItems.map((item) => (
                      <div key={item._id} className={styles.row}>
                        <div className={styles.col_1}>
                          <div className={styles.img_container}>
                            <img
                              src={item.image}
                              alt='product Image'
                              className={styles.img}
                            />
                          </div>
                        </div>
                        <div className={styles.col_2}>
                          <div className={styles.order_title}>{item.name}</div>
                        </div>
                        <div className={styles.col_3}>
                          <div className={styles.order_price}>
                            {item.qty} x {item.price} = ৳{" "}
                            {(item.qty * item.price).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className={styles.right_bottom}>
                <div className={styles.row_bottom}>
                  <div className={styles.col}>
                    <div className={styles.sub_title}>Delivery Addresss</div>
                    <div className={styles.user_name}>
                      <span className={styles.bold_name}>
                        {order && firstName} {order && lastName}
                      </span>
                    </div>
                    <div className={styles.user_address}>
                      Address:
                      <span className={styles.content}>
                        {" "}
                        {order && address}
                      </span>
                    </div>
                    <div className={styles.user_address}>
                      City-Zip:
                      <span className={styles.content}>
                        {" "}
                        {order && city}- {order && zip}
                      </span>
                    </div>
                    <div className={styles.user_address}>
                      Division, Country:
                      <span className={styles.content}>
                        {" "}
                        {order && division}, Bangladesh
                      </span>
                    </div>
                    <div className={styles.user_address}>
                      Phone:
                      <span className={styles.content}> {order && phone}</span>
                    </div>
                  </div>
                  <div className={styles.col}>
                    <div className={styles.sub_title}>Total Summary</div>
                    <div className={styles.row_summary}>
                      <div className={styles.col_summary}>
                        <div className={styles.summary_title}>Sub Total:</div>
                        <div className={styles.summary_value}>
                          ৳ {prodTotalPrice}
                        </div>
                      </div>
                      <div className={styles.col_summary}>
                        <div className={styles.summary_title}>
                          Delivery Charge:
                        </div>
                        <div className={styles.summary_value}>
                          ৳{order && order.shippingPrice}
                        </div>
                      </div>
                      <div className={styles.col_summary}>
                        <div className={styles.summary_title}>Tax Fee:</div>
                        <div className={styles.summary_value}>
                          {" "}
                          ৳ {order && order.taxPrice}
                        </div>
                      </div>
                      <hr />
                      <div className={styles.col_summary}>
                        <div className={styles.sub_title}>Total</div>
                        <div className={styles.total_price}>
                          {" "}
                          ৳ {order && order.totalPrice}
                        </div>
                      </div>
                      <div className={styles.title_payment}>
                        <span className={styles.payment_bold}>Payment: </span>
                        <span className={styles.payment_content}>
                          {order && order.paymentMethod}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
