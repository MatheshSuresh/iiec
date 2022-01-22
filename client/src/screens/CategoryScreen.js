import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../components/styles/productScreen.module.css";
import ProductList from "../components/ProductList";
import { getProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";

import Loading from "../components/Loading";
import Message from "../components/Message";

const CategoryScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const category = match.params.category;

  console.log(location.search);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(keyword));
  }, [dispatch, keyword]);

  const quickSearchHanlder = (e) => {
    dispatch(getProducts("", e.target.value));
  };
  return (
    <div className={styles.product_container}>
      <div className={styles.side_bar}>
        <div className={styles.fiter_container}>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>In Stock</div>

            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch1'
              />
              <label class='custom-control-label' for='customSwitch1'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>On Sale</div>
            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch2'
              />
              <label class='custom-control-label' for='customSwitch2'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>Sold By FR Store</div>
            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch3'
              />
              <label class='custom-control-label' for='customSwitch3'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>Free Shipping</div>
            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch4'
              />
              <label class='custom-control-label' for='customSwitch4'></label>
            </div>
          </div>
          {/* Accordion Start */}
          <div className={styles.filter_accordions}>
            <div class='accordion' id='accordionPanelsStayOpenExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='panelsStayOpen-headingOne'>
                  <button
                    class='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseOne'
                    aria-expanded='true'
                    aria-controls='panelsStayOpen-collapseOne'
                  >
                    Price
                  </button>
                </h2>
                <div
                  id='panelsStayOpen-collapseOne'
                  class='accordion-collapse collapse show'
                  aria-labelledby='panelsStayOpen-headingOne'
                >
                  <div class='accordion-body'>
                    <strong>Price</strong>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseTwo'
                    aria-expanded='false'
                    aria-controls='panelsStayOpen-collapseTwo'
                  >
                    Brand
                  </button>
                </h2>
                <div
                  id='panelsStayOpen-collapseTwo'
                  class='accordion-collapse collapse'
                  aria-labelledby='panelsStayOpen-headingTwo'
                >
                  <div class='accordion-body'>
                    <strong>Brand.</strong>{" "}
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='panelsStayOpen-headingThree'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseThree'
                    aria-expanded='false'
                    aria-controls='panelsStayOpen-collapseThree'
                  >
                    Condition
                  </button>
                </h2>
                <div
                  id='panelsStayOpen-collapseThree'
                  class='accordion-collapse collapse'
                  aria-labelledby='panelsStayOpen-headingThree'
                >
                  <div class='accordion-body'>
                    <strong>Condition</strong>
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header' id='panelsStayOpen-headingThree'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseFour'
                    aria-expanded='false'
                    aria-controls='panelsStayOpen-collapseFour'
                  >
                    Availability
                  </button>
                </h2>
                <div
                  id='panelsStayOpen-collapseFour'
                  class='accordion-collapse collapse'
                  aria-labelledby='panelsStayOpen-headingFour'
                >
                  <div class='accordion-body'>
                    <strong>Availability</strong>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      <div className={styles.main_section}>
        <div className={styles.slider}>
          <img
            src='/images/shopPage/1920x120 (2).jpg'
            alt=''
            className={styles.slider_img}
          />
        </div>
        <div className={styles.product_filter_container}>
          <div className={styles.left}>
            <div className={styles.search_container}>
              <div className={styles.text}>Search Product: </div>
              <input
                type='text'
                name='q'
                onChange={quickSearchHanlder}
                className={styles.search}
              />
              {/* <button className={styles.src_btn}>Quick Search</button> */}
            </div>
            <div className={styles.sort_container}>
              <div className={styles.text}>Sort By: </div>
              <input
                type='text'
                className={styles.sort}
                placeholder='Featured Items'
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.page_list}>Page 1/3</div>
            <div className={styles.change_page_btn}>
              <button className={styles.prev_btn}>{"<"}</button>
              <button className={styles.next_btn}>{">"}</button>
            </div>
          </div>
        </div>
        <div className={styles.product_list}>
          {loading && <Loading></Loading>}
          {error && <Message>{error}</Message>}
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductList product={product}></ProductList>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;
