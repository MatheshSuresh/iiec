import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, editProduct } from "../../../../actions/productActions";
import axios from "axios";

import Chart from "../../charts/Chart";
import Message from "../../../Message";
import Loading from "../../../Loading";
import { serviceData } from "../../DummyData";
import "./adminProductEdit.css";
import { Publish } from "@material-ui/icons";

const AdminProductEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  const productEdit = useSelector((state) => state.productEdit);
  const {
    loading: loadingUpdate,
    product: productUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productEdit;

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    dispatch(getProduct(id));
    setName(product.name);
    setBrand(product.brand);
    setCategory(product.category);
    setImage(product.image);
    setPrice(product.price);
    setDescription(product.description);
    setCountInStock(product.countInStock);
  }, [
    dispatch,
    product.name,
    product.description,
    product.brand,
    product.category,
    product.price,
    product.countInStock,
    product.image,
    productUpdate,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editProduct({
        _id: id,
        name,
        image,
        brand,
        category,
        price,
        countInStock,
        description,
      })
    );
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "/api/upload",
        formData,
        config
      );
      let dat = data;
      dat = dat.replace(/\\/g, "/");
      dat = dat.substring(13);
      const imageString = dat;
      setImage(imageString);
      console.log(image);
      dat = "";
      setUploading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='admin_product_detail'>
      {loading && <Loading></Loading>}
      {loadingUpdate && <Loading></Loading>}
      <div className='admin_product_update_success_msg'>
        {error && <Message variant='danger'>{error}</Message>}
      </div>
      <div className='admin_product_update_success_msg'>
        {errorUpdate && <Message variant='danger'>{error}</Message>}
      </div>
      <div className='admin_product_update_success_msg'>
        {successUpdate && (
          <Message>{"Product Was Edited Successfully"}</Message>
        )}
      </div>
      <div className='serviceDetails_title_container'>
        <div className='admin_product_edit_title'>Product Details</div>
      </div>
      <div className='admin_userDetails_container'>
        <div className='admin_productEdit_left '>
          <div className='user_show_top'>
            <img
              src={product.image}
              alt=''
              className='productEdit_left_img'
            ></img>
            <div className='user_show_top_title'>
              <span className='product_show_name'>Added By</span>
              <span className='product_show_brand'>{product.user}</span>
            </div>
          </div>
          <div className='user_show_bottom'>
            <span className='user_show_title'>Product Details</span>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Name: </span>
                {product.name}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Price: </span>
                {product.price}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Brand: </span>
                {product.brand}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Category: </span>
                {product.category}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Stock: </span>
                {product.countInStock}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Rating: </span>
                {product.rating}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Description: </span>
                {product.description}
              </span>
            </div>
            {/* <div className='user_show_info'>
              <LocationSearching className='user_show_icon' />
              <span className='user_show_info_title'>C-office Bogra</span>
            </div> */}
          </div>
        </div>
        <div className='admin_edit_right_box admin__edit_customizer-2'>
          <div
            className='admin_user_update_title'
            style={{ fontFamily: "Open Sans Condensed" }}
          >
            Edit Product
          </div>
          <form onSubmit={handleSubmit} className='admin_user_update_form'>
            <div className='admin_edit_product_right'>
              <div className='edit_product_item'>
                <label className='admin_bold'>Name</label>
                <input
                  value={name}
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                  className='admin_user_update_input'
                />
              </div>

              <div className='edit_product_item'>
                <label className='admin_bold'>Brand</label>
                <input
                  value={brand}
                  type='text'
                  onChange={(e) => setBrand(e.target.value)}
                  className='admin_user_update_input'
                />
              </div>
              <div className='edit_product_item'>
                <label className='admin_bold'>Category</label>
                <input
                  value={category}
                  type='text'
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder=''
                  className='admin_user_update_input'
                />
              </div>
              <div className='edit_product_item'>
                <label className='admin_bold'>Price</label>
                <input
                  value={price}
                  type='number'
                  onChange={(e) => setPrice(e.target.value)}
                  className='admin_user_update_input'
                />
              </div>
              <div className='edit_product_item'>
                <label className='admin_bold'>Stock</label>
                <input
                  type='number'
                  onChange={(e) => setCountInStock(e.target.value)}
                  className='admin_user_update_input'
                  value={countInStock}
                />
              </div>
              <div className='edit_product_item'>
                <label className='admin_bold'>Description</label>
                <textarea
                  type='text'
                  onChange={(e) => setDescription(e.target.value)}
                  className='admin_product_edit_textarea'
                  value={description}
                />
              </div>
            </div>
            <div className='user_update_right' style={{ height: "520px" }}>
              <div className='admin_user_update_upload'>
                <img
                  className='admin_product_edit_upload'
                  src={product.image}
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='upload_icon_edit_screen' />
                </label>

                <input
                  type='file'
                  onChange={uploadFileHandler}
                  id='file'
                  style={{ display: "none" }}
                />
              </div>
              <button type='submit' className='admin_edit_update_btn'>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='serviceDetails_top'>
        <div className='serviceDetails_top_left'>
          <Chart
            data={serviceData}
            dataKey='User Registered'
            title='Total Number Of Sale In A Month'
            grid
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProductEdit;
