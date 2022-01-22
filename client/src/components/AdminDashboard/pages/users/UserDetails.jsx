import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, editUser } from "../../../../actions/userAction";
import axios from "axios";

import Message from "../../../Message";
import Loading from "../../../Loading";
import { Publish } from "@material-ui/icons";
import "./userDetails.css";
const UserDetails = () => {
  const { id } = useParams();

  const userFetch = useSelector((state) => state.userFetch);
  const { loading, error, user } = userFetch;

  const userEdit = useSelector((state) => state.userEdit);
  const {
    loading: loadingEdit,
    error: errorEdit,
    success,
    user: editedUser,
  } = userEdit;

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [image, setImage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [uploading, setUploading] = useState();
  let birthdate = "";
  if (dateOfBirth) {
    birthdate = dateOfBirth.split("T")[0];
  }
  useEffect(() => {
    dispatch(getUser(id));

    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setPhone(user.phone);
    setAddress(user.address);
    setDateOfBirth(user.dateOfBirth);
    setImage(user.image);
    setIsAdmin(user.isAdmin);
  }, [dispatch, user.name]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        _id: id,
        name,
        email,
        phone,
        dateOfBirth,
        address,
        password,
        isAdmin,
        image,
      })
    );
  };

  return (
    <div className='admin_userDetails'>
      {loading && <Loading></Loading>}
      {loadingEdit && <Loading></Loading>}
      <div className='admin_product_update_success_msg'>
        {error && <Message variant='danger'>{error}</Message>}
      </div>
      <div className='admin_product_update_success_msg'>
        {editedUser && editedUser.length > 0 && (
          <Message variant='danger'>{error}</Message>
        )}
      </div>
      <div className='admin_product_update_success_msg'>
        {success && <Message>{"User Was Edited Successfully"}</Message>}
      </div>
      <div className='admin_userDetails_title_container'>
        <h1 className='admin_userDetails_title'>Edit User</h1>
      </div>
      <div className='admin_userDetails_container'>
        <div className='admin_userDetails_user_show'>
          <div className='user_show_top'>
            <img src={image} alt='user image' className='user_show_img'></img>
            <div className='user_show_top_title'>
              <span className='user_show_username'>User</span>
              <span className='user_show_title'>{name}</span>
            </div>
          </div>
          <div className='user_show_bottom'>
            <span className='user_show_title'>Account Details</span>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>ID :</span>
                {id}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Email :</span>
                {email}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Phone :</span>
                {phone}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>
                  Date of Birth :{" "}
                  <span
                    className='admin_bold'
                    style={{ color: "grey", fontSize: "17px" }}
                  >
                    {dateOfBirth && dateOfBirth.split("T")[0]} (yy-mm-dd)
                  </span>
                </span>
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Address: </span>
                {address}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Password:</span>
                {user.password}
              </span>
            </div>
            <div className='user_show_info'>
              <span className='user_show_info_title'>
                <span className='admin_bold'>Admin: </span>{" "}
                {isAdmin ? "YES" : "NO"}
              </span>
            </div>
          </div>
        </div>
        <div className='admin_userDetails_user_update'>
          <div className='admin_user_update_title'>Edit</div>

          <form onSubmit={handleSubmit} className='admin_user_update_form'>
            <div className='user_update_left'>
              <div className='user_update_item'>
                <label>Username</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='admin_user_update_input'
                />
              </div>

              <div className='user_update_item'>
                <label className='admin_bold'>Email</label>
                <input
                  type='text'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  b
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label className='admin_bold'>Phone</label>
                <input
                  type='text'
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label className='admin_bold'>Address</label>
                <input
                  type='address'
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label className='admin_bold'>Date of Birth</label>
                <input
                  type='date'
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={dateOfBirth}
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label className='admin_bold'>Password</label>
                <input
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  b
                  className='admin_user_update_input'
                />
              </div>
              <div className='user_update_item'>
                <label className='admin_bold'>Admin</label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  onClick={() => setIsAdmin(true)}
                />
                <label class='form-check-label' for='inlineRadio1'>
                  True
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio2'
                  value='option2'
                  onClick={() => setIsAdmin(false)}
                />
                <label class='form-check-label' for='inlineRadio2'>
                  False
                </label>
              </div>
            </div>
            <div className='user_update_right'>
              <div className='admin_user_update_upload'>
                <img
                  className='admin_user_update_img'
                  src={image}
                  alt='User Image'
                />
                <label htmlFor='file'>
                  <Publish className='admin_user_update_icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={uploadFileHandler}
                  style={{ display: "none" }}
                />
              </div>
              <button className='admin_edit_update_btn'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
