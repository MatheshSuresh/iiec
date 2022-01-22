import React, { useState, useEffect } from "react";
import styles from "../styles/overviewSection.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../types/productTypes";
import { useParams } from "react-router";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { getProduct, createProductReview } from "../../actions/productActions";
import Rating from "../common/Rating";
import Message from "../Message";
import Loading from "../Loading";

const OverviewSection = ({ match }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(getProduct(id));
  }, [dispatch, id, product.reivew]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    );

    window.location.reload();
  };

  return (
    <div className={styles.overview_container}>
      <Row className={styles.review_container}>
        <Col md={6}>
          <div className={styles.title_1}>CUSTOMER REVIEWS</div>
          {/* {product.review.length === 0 && "No Reviews"} */}
          <ListGroup variant='flush'>
            {product.review.map((review) => (
              <ListGroup.Item className={styles.comment_field} key={review._id}>
                <div className={styles.flex}>
                  <img
                    className={styles.user_image}
                    src='/images/default._CR0,0,1024,1024_SX48_.jpg'
                    alt=''
                  />
                  <strong>{review.name}</strong>
                </div>
                <Rating value={review.rating}></Rating>
                <p className={styles.date}>
                  Reviewed on {review.createdAt.substring(0, 10)}
                </p>
                <p className={styles.comment}>{review.comment}</p>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <h2 className={styles.title_2}>WRITE A CUSTOMER REVIEW</h2>
              {errorProductReview && (
                <Message variant='danger'>{errorProductReview}</Message>
              )}
              {userInfo ? (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='rating'>
                    <Form.Label className={styles.comment_text_1}>
                      Rating
                    </Form.Label>
                    <Form.Control
                      as='select'
                      // value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value=''>Select...</option>
                      <option value='1'>1 - Poor</option>
                      <option value='1'>2 - Fair</option>
                      <option value='1'>3 - Good</option>
                      <option value='1'>4 - Very Good</option>
                      <option value='1'>5 - Excellent</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='comment'>
                    <Form.Label className={styles.comment_text}>
                      Comment
                    </Form.Label>
                    <Form.Control
                      id='comment-box'
                      className={styles.comment_text_area}
                      as='textarea'
                      row='3'
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <button type='submit' className='review_button'>
                    SUBMIT
                  </button>
                </Form>
              ) : (
                <Message>
                  Please <Link to='/login'>sign in</Link> to write a review
                </Message>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div className={styles.overview_accordian}></div>
      <div className={styles.title}>Warrenty and Return</div>
      <div className={styles.warrenty_container}>
        <div className={styles.warrenty_title}>
          WARRANTY, RETURNS, AND ADDITIONAL INFORMATION
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.heading}>Return Policies</div>
            <div className={styles.content}>
              Return for refund within: 30 days
            </div>
            <div className={styles.content}>
              Return for replacement within: 30 days
            </div>
            <div className={styles.content}>
              This item is covered by IIEC.com's Standard Return Policy
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.heading}>Manufacturer Contact Info</div>
            <div className={styles.content}>Manufacturer Website</div>
            <div className={styles.content}>Support Phone: 1-800-275-2273</div>
            <div className={styles.content}>Support Website</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
