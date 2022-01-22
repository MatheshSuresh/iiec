import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/hero.css";

export default class AutoPlayMethods extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: -1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div className='flex-container'>
        <div className='flex-child'>
          {/* <h2>Auto Play & Pause with buttons</h2> */}
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div className='hero_container_right'>
              <Link to='#'>
                <img
                  className='hero_main_images'
                  src='/images/slider/1920x360.....jpg'
                  alt=''
                />
              </Link>
            </div>
            <div className='hero_container_right'>
              <img
                className='hero_main_images'
                src='/images/slider/1920x360@2x(1).jpg'
                alt=''
              />
            </div>
            <div className='hero_container_right'>
              <img
                className='hero_main_images'
                src='/images/slider/1920x360@2x.jpg'
                alt=''
              />
            </div>
            {/* <div className='hero_container_right'>
              <img
                className='hero_main_images'
                src='/images/slider/1920x660.jpg'
                alt=''
              />
            </div>
            <div className='hero_container_right'>
              <img
                className='hero_main_images'
                src='/images/slider/1920x660123.jpg'
                alt=''
              />
            </div> */}
          </Slider>
          <div style={{ textAlign: "center" }}>
            {/* <button className='button' onClick={this.play}>
            Play
            </button>
            <button className='button' onClick={this.pause}>
            Pause
          </button> */}
          </div>
        </div>
      </div>
    );
  }
}
