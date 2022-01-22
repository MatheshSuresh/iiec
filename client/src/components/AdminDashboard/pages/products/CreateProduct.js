import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../Loading";
import { createProduct } from "../../../../actions/productActions";
import axios from "axios";
import Message from "../../../Message";

import "../users/userCreate.css";
import "./createProduct.css";
const CreateProduct = () => {
  const { product, loading, error, success } = useSelector(
    (state) => state.productCreate
  );

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [brandImage, setBrandImage] = useState("kkk");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [uploading, setUploading] = useState(false);

  const Imageref = useRef("");
  // useEffect(() => {
  //   const imgaeValue = (document.getElementById("image-file").value = "none");
  // }, []);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);
    console.log(file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // /api/user/
      const { data } = await axios.post(
        "/api/upload",
        formData,
        config
      );
      let d = data;
      // client\uploads\image-1631300593073.png
      d = d.replace(/\\/g, "/");
      d = d.substring(13);
      const imgStr = d;
      setImage(imgStr);
      d = "";
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(
        name,
        brandImage,
        image,
        brand,
        price,
        category,
        description,
        countInStock
      )
    );
    setName("");
    setBrand("");
    setCategory("");
    setPrice(0);
    setDescription("");
    setCountInStock(0);
    document.getElementById("image-file").value = "";
  };

  return (
    <>
      <div className='admin_product_create'>
        {loading && <Loading></Loading>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message>{"A Product was added Successfully"}</Message>}
        <div className='admin_product_create_title text-center mb-5 mt-3'>
          Create Product
        </div>
        <form onSubmit={submitHandler} className='admin_create_product_form'>
          <div className='admin_create_product_item'>
            <label>Product Name </label>
            <input
              type='text'
              value={name}
              className='admin_input_field'
              style={{ display: "block" }}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* <div className='admin_create_product_item'>
          <label>Brand Image</label>
          <input className='admin_input_field' type='file' />
        </div> */}
          {uploading && <Loading />}
          <div className='admin_create_product_item'>
            <label>Product Image</label>
            <input
              id='image-file'
              // value={(e) => e.target.files[0]}
              className='admin_input_field'
              custom
              onChange={uploadFileHandler}
              type='file'
              placeholder='Enter Product Image'
            />
          </div>
          <div className='admin_create_product_item'>
            <label>Brand Name</label>
            <input
              value={brand}
              className='admin_input_field'
              required
              type='text'
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className='admin_create_product_item'>
            <label>Product Price</label>
            <input
              value={price}
              className='admin_input_field'
              onChange={(e) => setPrice(e.target.value)}
              required
              type='number'
            />
          </div>
          <div className='admin_create_product_item'>
            <label>Product Category</label>
            <input
              value={category}
              className='admin_input_field'
              onChange={(e) => setCategory(e.target.value)}
              required
              type='text'
            />
          </div>
          <div className='admin_create_product_item'>
            <label>Product Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='admin_textarea'
              required
              type='text'
            />
          </div>
          <div className='admin_create_product_item'>
            <label>Count In Stock</label>
            <input
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              className='admin_input_field'
              required
              type='number'
            />
          </div>
          <button type='submit' className='admin_create_new_user_btn'>
            Create Product
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
