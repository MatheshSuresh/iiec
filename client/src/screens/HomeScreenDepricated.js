import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Product from "../components/Product";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { Col, Row, Container } from "react-bootstrap";

import "../components/styles/HomeScreen.css";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  
  useEffect(() => {
    dispatch(getProducts());
    // const render = async () => {
    //   await dispatch(getProducts());
    // };
    // render();
    // console.log(products);
  }, [dispatch, getProducts]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div>
          <section class='banner-section'>
            <div className='hero_section_container'>
              <div className='hero_section_sub_title'>Fashion Guide</div>
              <div className='hero_section_title'>IIEC</div>
              <div className='hero_section_sub_title2'>
                Shop the latest clothing, shoes, and handbags from top fashion
              </div>
              <button className='btn-dark hero_section_btn'>Shop Now</button>
            </div>
          </section>
          <h2 className='text-center home_screen_title'>LATEST PRODUCTS</h2>

          <Container>
            <Row>
              {products.map((product) => (
                <Col key={product._id} md={3}>
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
