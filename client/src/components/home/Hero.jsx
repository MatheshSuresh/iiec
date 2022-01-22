import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";

import HomeSlider from "../common/Slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DropDown from "./DropDown";

const Hero = () => {

  return (
    <>
      <div className='hero_container'>
        {/*  */}
        <DropDown></DropDown>

        <div className='hero_section'>
          <HomeSlider />
          {/* <div className='hero_main_slider'></div> */}
          <div className='hero_sub_slider'>
            <Link to='/55' className='sub_slider_left'></Link>
            <Link to='/ff' className='sub_slider_right'></Link>
          </div>
        </div>
        {/* <div className='sub_slider_right'>2</div> */}
      </div>
    </>
  );
};

export default Hero;
