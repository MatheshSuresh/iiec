import React from "react";
import styles from "../styles/productDescription.module.css";
import { Link } from "react-router-dom";
const ProductDescription = ({ product }) => {
  const { rating } = product;

  const handleReview = () => {
    document.getElementById("comment-box").select();
    // window.scrollTo(0, window.innerHeight / 2);
    // window.scrollTo(0, document.body.scrollHeight);
    // console.log("click");
    window.scrollBy(0, 1000);
  };
  return (
    <div className={styles.product_description_container}>
      <div className={styles.title}>{product.name}</div>
      <div className={styles.ratings}>
        <i
          className={
            rating >= 1
              ? "fas fa-star"
              : rating >= 0.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            rating >= 2
              ? "fas fa-star"
              : rating >= 1.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            rating >= 3
              ? "fas fa-star"
              : rating >= 2.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            rating >= 4
              ? "fas fa-star"
              : rating >= 3.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            rating >= 5
              ? "fas fa-star"
              : rating >= 4.5
              ? "fa fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <span className={styles.review_nums}>({product.numReviews})</span>
        <span className={styles.write_reviews}>
          <Link onClick={handleReview} to='#'>
            Write a Review
          </Link>
        </span>
      </div>
      <hr />
      <div className={styles.stock}>
        {product.countInStock ? "In Stock" : "Out of Stock"}
      </div>
      <div className={styles.shipping_details}>Shipped From Bangladesh</div>
      <hr />
      <div className={styles.description_container}>
        <div className={styles.description}>
          <span className={styles.bold}>Descripiton: </span>{" "}
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
