import React from "react";
import "./smallWidget.css";
import { Visibility } from "@material-ui/icons";

const SmallWidget = () => {
  return (
    <div className='smallWidget'>
      <span className='smallWidget_title'>New Joined Memebers</span>
      <ul className='smallWidget_list'>
        <li className='smallWidget_list_item'>
          <img src='/images/developer.jpg' alt='' className='smallWidget_img' />
          <div className='smallWidget_user'>
            <span className='smallWidget_username'>Fahim Arif</span>
            <span className='smallWidget_user_title'>Software Engineer</span>
          </div>
          <button className='smallWidget_button'>
            <Visibility  className='smallWidget_icon'/>
            Display
          </button>
        </li>
        <li className='smallWidget_list_item'>
          <img src='/images/developer.jpg' alt='' className='smallWidget_img' />
          <div className='smallWidget_user'>
            <span className='smallWidget_username'>Fahim Arif</span>
            <span className='smallWidget_user_title'>Software Engineer</span>
          </div>
          <button className='smallWidget_button'>
            <Visibility />
            Display
          </button>
        </li>
        <li className='smallWidget_list_item'>
          <img src='/images/developer.jpg' alt='' className='smallWidget_img' />
          <div className='smallWidget_user'>
            <span className='smallWidget_username'>Fahim Arif</span>
            <span className='smallWidget_user_title'>Software Engineer</span>
          </div>
          <button className='smallWidget_button'>
            <Visibility />
            Display
          </button>
        </li>
        <li className='smallWidget_list_item'>
          <img src='/images/developer.jpg' alt='' className='smallWidget_img' />
          <div className='smallWidget_user'>
            <span className='smallWidget_username'>Fahim Arif</span>
            <span className='smallWidget_user_title'>Software Engineer</span>
          </div>
          <button className='smallWidget_button'>
            <Visibility />
            Display
          </button>
        </li>
        <li className='smallWidget_list_item'>
          <img src='/images/developer.jpg' alt='' className='smallWidget_img' />
          <div className='smallWidget_user'>
            <span className='smallWidget_username'>Fahim Arif</span>
            <span className='smallWidget_user_title'>Software Engineer</span>
          </div>
          <button className='smallWidget_button'>
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SmallWidget;
