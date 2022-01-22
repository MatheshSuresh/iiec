import React from "react";
import styles from "../components/styles/product-detail.module.css";
import ProductCart from "../components/product-detail-demo/ProductCart";
import ProductImage from "../components/product-detail-demo/ProductImage";
import ProductDescription from "../components/product-detail-demo/ProductDescription";
import OverviewSection from "../components/product-detail-demo/OverviewSection";

const ProductDetailSampleScreen = () => {
  return (
    <div className={styles.product_detail_container}>
      <div className={styles.row}>
        <ProductImage></ProductImage>
        <ProductDescription></ProductDescription>
        <ProductCart></ProductCart>
      </div>
      <OverviewSection></OverviewSection>
    </div>
  );
};

export default ProductDetailSampleScreen;
