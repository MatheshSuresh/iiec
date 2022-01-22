import React from "react";
import styles from "../styles/productDescription.module.css";
import { Link } from "react-router-dom";
const ProductDescription = () => {
  return (
    <div className={styles.product_description_container}>
      <div className={styles.title}>
        Apple iPhone 12 Pro Max 256GB GSM/CDMA Fully Unlocked - Graphite
      </div>
      <div className={styles.ratings}>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <span className={styles.review_nums}>(12)</span>
        <span className={styles.write_reviews}>
          <Link>Write a Review</Link>
        </span>
      </div>
      <hr />
      <div className={styles.stock}>In Stock</div>
      <div className={styles.shipping_details}>Shipped From Bangladesh</div>
      <hr />
      <div className={styles.description_container}>
        <div className={styles.description}>
          <span className={styles.bold}>Display: </span> 6.7 inches Super Retina
          XDR OLED, Scratch-resistant ceramic glass, oleophobic coating -
          Resoultion: 1284 x 2778 pixels
        </div>
        <div className={styles.description}>
          <span className={styles.bold}>Memory: </span> 256GB 6GB RAM
        </div>
        <div className={styles.description}>
          <span className={styles.bold}>Quad: </span>12 MP + 12 MP + 12 MP + TOF
          3D LiDAR scanner w/ Dual-LED dual-tone flash, HDR (photo/panorama) --
          Selfie Camera: Dual,12MP + SL 3D, (depth/biometrics sensor)
        </div>
        <div className={styles.description}>
          <span className={styles.bold}>Platform: </span>iOS 14.1 -- Apple A14
          Bionic -- Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm) --
          Apple GPU (4-core graphics)
        </div>
        <div className={styles.description}>
          <span className={styles.bold}>Battery: </span>Li-Ion 3687 mAh,
          non-removable - Qi fast wireless charging 15W
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
