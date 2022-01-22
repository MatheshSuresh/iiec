import React, { useState, useEffect } from "react";
import { getProduct } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import "../components/styles/ProductDetails.css";
import {
  ListGroup,
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loading from "../components/Loading";
import Message from "../components/Message";

const ProductScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, error, loading } = productDetails;
  const { id } = match.params;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);
  const addToCarthandler = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container>
          <Row className='product_details'>
            <Col md={5}>
              <Image src={product.image} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  {/* <h4>{product.name.length > 10 ? "long" : product.name}</h4> */}

                  {/* <h4>{product.name}</h4> */}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={product.rating}
                    text={product.numReviews}
                  ></Rating>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Price : {product.price}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='product_details_item_description'>
                    {product.description}
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup style={{ border: "hidden" }} variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={addToCarthandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductScreen;
