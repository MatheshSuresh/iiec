import React from "react";
import styles from "../styles/product-image.module.css";
const ProductImage = () => {
  return (
    <div className={styles.product_image_container}>
      <div className={styles.product_meta_data}>
        <div className={styles.product_number}>Item: B9388134F</div>
        <div className={styles.product_brand_img}>
          <img
            src='/images/Brand1759.gif'
            alt=''
            className={styles.brand_img}
          />
        </div>
      </div>
      <div className={styles.image_container}>
        <img
          src='/images/AAM8S210409xv1Fx.png'
          className={styles.product_image}
        ></img>
      </div>
      <div className={styles.product_slider_container}>
        <img src='/images/AAM8S210409gvTpO.png' alt='' className='' />
        <img src='/images/AAM8S210409OYgto.png' alt='' className='' />
        <img src='/images/AAM8S210409SDmxQ.png' alt='' className='' />
        <img src='/images/AAM8S210409xv1Fx (1).png' alt='' className='' />
      </div>
    </div>
  );
};

export default ProductImage;
