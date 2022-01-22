import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from "../components/styles/product-detail.module.css";
import ProductCart from "../components/product-detail-page/ProductCart";
import ProductImage from "../components/product-detail-page/ProductImage";
import ProductDescription from "../components/product-detail-page/ProductDescription";
import OverviewSection from "../components/product-detail-page/OverviewSection";
import { getProduct } from "../actions/productActions";

import Message from "../components/Message";
import Loading from "../components/Loading";

const ProductDetailScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => dispatch(getProduct(id)), [dispatch]);
  return (
    <div className={styles.product_detail_container}>
      {error && <Message>{error}</Message>}
      {loading && <Loading></Loading>}
      <div className={styles.row}>
        <ProductImage product={product}></ProductImage>
        <ProductDescription product={product}></ProductDescription>
        <ProductCart product={product}></ProductCart>
      </div>
      <OverviewSection></OverviewSection>
    </div>
  );
};

export default ProductDetailScreen;
