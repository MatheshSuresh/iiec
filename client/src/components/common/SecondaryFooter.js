import React from "react";
import { Link } from "react-router-dom";

import "../../components/styles/Footer.css";
import "../../components/styles/secondaryFooter.css";
const Footer = ({ children }) => {
  return (
    <>
      {children}
      <footer className='footer-secondary'>
        <div className='footer-wrapper'>
          {/* <hr /> */}
          <div className='footer_second_row pt-4'>
            <div className='footer_second_col'>
              <div className='footer_title footer_title--row_two'>
                Follow us
              </div>
              <Link to='#'>
                <i className='fab fa-facebook'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-twitter'></i>
              </Link>
            </div>
            <div className='copy-right'>
              © 2021 FR Store.com Inc. or its affiliates
            </div>
            <div className='footer_second_col'>
              <div className='footer_title footer_title--row_two'>
                Mobile App
              </div>
              <Link to='#'>
                <i className='fab fa-apple'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-android'></i>
              </Link>
            </div>
          </div>
          {/* <hr /> */}
          <div className='footer_bottom pt-4'>
            <div className='footer_site_logo'>
              <Link to='/'>
                <img src='images/logo.png' alt='' />
              </Link>
            </div>
            <Link to='#'>Terms of Service</Link>
            <Link to='#'>Privacy Policy</Link>
            <Link to='#'>Accessibility</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
