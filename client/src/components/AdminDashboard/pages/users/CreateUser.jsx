import React from "react";
import "./userCreate.css";
const CreateUser = () => {
  return (
    <div className='admin_userCreate'>
      <h1 className='admin_userCreate_title'>Create User</h1>
      <form className='admin_create_user_form'>
        <div className='admin_create_user_item'>
          <label className="create_user_label">Username</label>
          <input type='text' />
        </div>
        <div className='admin_create_user_item'>
          <label className="create_user_label">First name</label>
          <input type='text' />
        </div>
        <div className='admin_create_user_item'>
          <label className="create_user_label">Last name</label>
          <input type='text' />
        </div>
        <div className='admin_create_user_item'>
          <label className="create_user_label">Email</label>
          <input type='email' />
        </div>
        <div className='admin_create_user_item'>
          <label className="create_user_label">Phone Number</label>
          <input type='number' />
        </div>
        <div className='admin_create_user_item'>
          <label className="create_user_label">Password</label>
          <input type='password' />
        </div>
        <div className='admin_create_user_item'>
          <label>Gender</label> <br />
          <div className='admin_create_user_gender'>
            <input type='radio' name='gender' id='male' value='male' />
            <label for='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label for='female'>Female</label>
            <input type='radio' name='gender' id='others' value='others' />
            <label for='others'>Others</label>
          </div>
        </div>
        <button className="admin_create_new_user_btn">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
