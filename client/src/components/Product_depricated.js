import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className='p-3 my-3' style={{ width: "16rem" }}>
      <Link to={`/products/${product._id}`}>
        <Card.Img className='home_screen_product_img' src={product.image} alt={product.name}></Card.Img>
      </Link>
      <Card.Body>
        <Link style={{ textDecoration: "none", color: "inherit" }} to='/'>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Rating rating={product.rating} text={product.numReviews}></Rating>
        <Card.Text as='h4'>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
