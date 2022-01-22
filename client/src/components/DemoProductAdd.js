import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";

const DemoProductAdd = () => {
  const [input, setInput] = useState({});
  console.log(input);

  const submitHandler = (e) => {
    e.preventDefault();

    // const { data } = await axios.get("/product-add");
    // console.log(data);
    axios
      .post(
        "/product-add",
        {  input },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    /* axios
      .post("/product-add", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));  */
  };
  return (
    <div>
      <Row className='d-flex justify-content-center'>
        <Col md={5}>
          <Form>
            <Form.Group controlId='productName'>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                onChange={({ target }) =>
                  setInput((state) => ({ ...state, name: target.value }))
                }
                type='text'
                placeholder='Enter product name'
              />
            </Form.Group>
            <Form.Group controlId='productImage'>
              <Form.Label>Product Image Url</Form.Label>
              <Form.Control
                onChange={({ target }) =>
                  setInput((state) => ({ ...state, image: target.value }))
                }
                type='text'
                placeholder='Enter product Image Url'
              />
            </Form.Group>
            <Form.Group controlId='productDescription'>
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                onChange={({ target }) =>
                  setInput((state) => ({ ...state, description: target.value }))
                }
                type='text'
                placeholder='Enter product Description'
              />
            </Form.Group>
            <Form.Group controlId='productPrice'>
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                onChange={({ target }) =>
                  setInput((state) => ({ ...state, price: target.value }))
                }
                type='number'
                placeholder='Enter product Price'
              />
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button onClick={submitHandler}>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default DemoProductAdd;
