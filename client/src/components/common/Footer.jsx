import React from "react";
import { Link } from "react-router-dom";

import "../../components/styles/Footer.css";
const Footer = ({ children }) => {
  return (
    <>
      {children}
      <footer className='footer'>
        <div className='footer-wrapper'>
          <div className='site_footer'>
            <div className='footer__row'>
              <div className='footer__col'>
                <div className='footer_title footer_title--row_one'>
                  Get to Know Us
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='/tuition'>Careers</Link>
                    </li>
                    <li>
                      <Link to='#'>Blog</Link>
                    </li>
                    <li>
                      <Link to='#'>About FR Store</Link>
                    </li>
                    <li>
                      <Link to='#'>FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer__col'>
                <div className='footer_title footer_title--row_one'>
                  Make Money with Us
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='/tuition'>Sell products on FR Store</Link>
                    </li>
                    <li>
                      <Link to='#'>Sell on FR Store Business</Link>
                    </li>
                    <li>
                      <Link to='#'>Become an Affiliate</Link>
                    </li>
                    <li>
                      <Link to='#'>Buy Gift Cards</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer__col'>
                <div className='footer_title footer_title--row_one'>
                  Company
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='#'>About Us</Link>
                    </li>
                    <li>
                      <Link to='#'>Our Services</Link>
                    </li>
                    <li>
                      <Link to='#'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to='#'>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer__col col-exp'>
                <div className='footer_title footer_title--row_one'>
                  Useful Links
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='/profile'>My Profile</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact Us</Link>
                    </li>
                    <li>
                      <Link to='/sign-up'>Register</Link>
                    </li>
                    <li>
                      <Link to='/'>Help</Link>
                    </li>
                    <li>
                      <Link to='/'>Shipping Rates {"&"} Policies</Link>
                    </li>
                    <li>
                      <Link to='/'>Returns {"&"} Replacements</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='footer_second_row'>
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
          <hr />
          <div className='footer_bottom'>
            <div className='footer_site_logo'>
              <img src='images/logo.png' alt='' />
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
