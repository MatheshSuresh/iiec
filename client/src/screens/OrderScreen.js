import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myOrderDetails } from "../actions/orderActions";
import { useParams } from "react-router-dom";
import styles from "../components/styles/orderScreen.module.css";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import Message from "../components/Message";

export default function OrderScreen({ match }) {
  let id = match.params.id;
  console.log(typeof id);
  let prodTotalPrice;
  const dispatch = useDispatch();
  const myOrder = useSelector((state) => state.myOrder);
  const { order, loading, error } = myOrder;

  const [pending, setPending] = useState(false);
  const [deliverd, setDeliverd] = useState(false);
  const [shipped, setShipped] = useState(false);

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

  useEffect(() => {
    if (order) {
      if (order.isPaid) {
        setShipped(true);
      }
      if (order.isDelivered) {
        setDeliverd(true);
      }
    }
  }, [order]);
  if (order) {
    prodTotalPrice = order.orderItems.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    console.log(prodTotalPrice);
  }
  return (
    <div className={styles.order_screen}>
      {loading && <Loading></Loading>}
      {error && <Message>{error}</Message>}
      <div className={styles.order_screen_container}>
        <div className={styles.main_title}>ORDER DETAILS</div>
        <div className={styles.container}>
          <div className={styles.left_container}>
            <div className={styles.side_bar}>
              <div className={styles.small}>Hello, Fahim</div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar}>
                  <Link to='/profile'>Manage My Account</Link>
                </div>

                <div className={styles.secondary_sidebar}>
                  <Link to='/profile'>My Profile</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>Address Book</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>My Payment Option</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>Voutchers / Coupons</Link>
                </div>
              </div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar}>
                  <Link to='/profile/orders'>My Order</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>Cancelled Orders</Link>
                </div>
                <div className={styles.secondary_sidebar}>
                  <Link to='#'>My Returns</Link>
                </div>
              </div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar}>
                  <Link to='#'>My Reviews</Link>
                </div>
              </div>
              <div className={styles.side_bar_items}>
                <div className={styles.main_sidebar} style={{ padding: "0" }}>
                  <Link to='#'>My Wishlist</Link>
                </div>
              </div>
            </div>
          </div>
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
              <div className={styles.status}>
                <span className={styles.status_light}>Status:</span>
                <span className={styles.status_value}>
                  {/* Not Delivered */}
                  {order && order.isCancelled
                    ? "Order Cancelled"
                    : order && order.isPaid
                    ? order.isDelivered
                      ? "Delivered"
                      : "Payment Confirmed Waiting For Delivery"
                    : "Payment Pending"}
                  {/* {order && order.isPaid
                    ? order.isDelivered
                      ? "Delivered"
                      : "Payment Confirmed Waiting For Delivery"
                    : "Payment Pending"} */}
                  {/* {order && order.isPaid && order.isDelivered ? 'Not '} */}
                </span>
              </div>
              <div className={styles.animation_container}>
                <div className={styles.animation_status}>
                  {order && order.isPaid ? (
                    order.isDelivered ? (
                      <img src='/images/Group31.png' alt='' className='' />
                    ) : (
                      <img src='/images/Group34(1).jpg' alt='' className='' />
                    )
                  ) : (
                    <img src='/images/Group35.jpg' alt='' className='' />
                  )}
                </div>
                <div className={styles.animation_status}>
                  <div className={styles.processing}>Pending</div>
                  <div
                    className={`${styles.processing_status} ${
                      shipped ? `${styles.active}` : ""
                    }`}
                  >
                    Shipped
                  </div>
                  <div
                    className={`${styles.processing_status} ${
                      deliverd ? `${styles.active}` : ""
                    }`}
                  >
                    Delivered
                  </div>
                </div>
              </div>
              <div className={styles.order_msg_container}>
                <div className={styles.order_msg}>
                  {order && order.isCancelled
                    ? "Order has been cancelled"
                    : order && order.isPaid
                    ? order.isDelivered
                      ? "Your order has been delivered successfully. Thank you for purchasing from FR Store"
                      : "Your payment has been confirmed and your order is being shipped. You will most likely receive your order within 3-5 days."
                    : "Your order is pending. Admin is looking into your payment. Please wait a few minutes."}
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
                    <span className={styles.content}> {order && address}</span>
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
  );
}
