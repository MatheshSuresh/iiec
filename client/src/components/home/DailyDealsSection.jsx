import React from "react";
import { Link } from "react-router-dom";
import "../styles/daily-deals-section.css";
const DailyDealsSection = () => {
  return (
    <>
      <div className='daily-deals-section'>
        <div className='daily-deals-container'>
          <h1 className='daily-deals-title'>Daily Deals</h1>
          <div className='card_row'>
            <div className='card_col-1_container'>
              <div className='col-1_row-1'>
                <div className='col-1_title'>SIGN IN FOR BEST EXPERICENCE</div>
                <Link to='/'>
                  <div className='sign_in_button'>SIGN IN</div>
                </Link>
                <div className='sign_up_text'>
                  New to IIEC? <Link to='/sign-up'>Sign Up</Link>
                </div>
              </div>
              <div className='col-1_row-2'>
                <div className='col-1_title'>
                  CATAGORIES YOU MAY BE INTERESTED
                </div>
                <div className='col-1_row-2_container'>
                  <div className='col-1_sub_col'>
                    <Link to='/shop/6148d2e5043d544188162d35'>
                      <img
                        src='/images/3_3629.jpg'
                        alt='VR Headset'
                        className='col-1_sub_col_img'
                      />
                      <div className='sub_col_title text-center'>
                        VR HEADSET
                      </div>
                    </Link>
                  </div>
                  <Link to='/shop/6148d28e043d544188162d34'>
                    <div className='col-1_sub_col'>
                      <img
                        src='/images/68-105-274-V01.jpg'
                        alt='Playstation'
                        className='col-1_sub_col_img'
                      />
                      <div className='sub_col_title text-center'>
                        PLAYSTATION
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* New Col col-2 row-1 */}
            <div className='card_col'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='/shop/6148ab453bebfe2a545f6908'>
                    <img
                      src='/images/bestDeals/34-233-446-15.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (6)
                </div>
                <Link to='/shop/6148ab453bebfe2a545f6908'>
                  <div className='card_description'>
                    GIGABYTE AERO 15 OLED KD - 15.6" UHD 4K AMOLED, Intel Core
                    i7 11th Gen 11800H NVIDIA GeForce RTX....
                  </div>
                </Link>
                <div className='card_prev_price'>1,50,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 1,30,000
                </div>
              </div>
            </div>
            {/* New COl col-3 row-1 */}
            <div className='card_col'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='/shop/6148c621043d544188162d2d'>
                    <img
                      src='/images/bestDeals/83-360-194-09.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star-half-alt'></i>
                  <i className='far fa-star'></i>
                  (3)
                </div>
                <Link to='/shop/6148c621043d544188162d2d'>
                  <div className='card_description'>
                    ABS Master Gaming PC - Intel i5 10400F - GeForce RTX 3060
                    12GB - 16GB DDR4 3000MHz - 512GB SSD....
                  </div>
                </Link>
                <div className='card_prev_price'>95,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 90,000
                </div>
              </div>
            </div>
            {/* New Col col-4 row-1 */}
            <div className='card_col'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='/shop/6148ce6b043d544188162d31'>
                    <img
                      src='/images/bestDeals/24-716-003-V09.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  (9)
                </div>
                <Link to='/shop/6148ce6b043d544188162d31'>
                  <div className='card_description'>
                    Samsung 43" Smart 4K Crystal HDR UHD TV TU7000 Series -
                    Titan Gray
                  </div>
                </Link>
                <div className='card_prev_price'>1,50,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 1,50,000
                </div>
              </div>
            </div>
          </div>
          {/* New COl Col-1 Row-2 */}
          <div className='card_row_last mt-4'>
            <div className='card_col_last'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='/shop/6148cb9e043d544188162d2e'>
                    <img
                      src='/images/uploads/image-1632166842581.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  {/* <i className='fa fa-star'></i> */}
                  (2)
                </div>
                <Link to='/shop/6148cb9e043d544188162d2e'>
                  <div className='card_description'>
                    Dockers Mens Garfield Dress Cap Toe Oxford Shoe - Wide
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 3,599
                </div>
              </div>
            </div>
            {/* New COl Col-2 Row-2 */}
            <div className='card_col_last'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='/shop/6148cc29043d544188162d2f'>
                    <img
                      src='/images/uploads/image-1632165926485.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='far fa-star'></i>
                  {/* <i className='fa fa-star'></i> */}
                  (4)
                </div>
                <Link to='/shop/6148cc29043d544188162d2f'>
                  <div className='card_description'>
                    Women's Short Sleeve Casual T-Shirt - A New Day™
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 499
                </div>
              </div>
            </div>
            {/* New Col Col-3 Row-2 */}
            <div className='card_col_last'>
              <div className='card_container'>
                <div className='card_heading'>Today's Deal</div>
                <div className='card_image'>
                  <Link to='/shop/6148cd59043d544188162d30'>
                    <img
                      src='/images/uploads/image-1632166661100.jpg'
                      alt=''
                      className='card_product_image'
                    />
                  </Link>
                </div>
                <div className='card_rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='far fa-star'></i>
                  (12)
                </div>
                <Link to='/shop/6148cd59043d544188162d30'>
                  <div className='card_description'>
                    Cutter {"&"} Buck Men's Windward Jigsaw Print Short Sleeve
                    Shirt
                  </div>
                </Link>
                <div className='card_prev_price'>80,000</div>
                <div className='card_new_price'>
                  <span>৳</span> 1200
                </div>
              </div>
            </div>
            <div className='col-4_row-2_container'>
              <div className='card_last_row-1'>
                <div className='card_heading'>Recently Viewed</div>
                <div className='row-2_sub_container'>
                  <div className='row-2_sub_col'>
                    <Link to='/shop/6148d111043d544188162d32'>
                      <img
                        src='/images/bestDeals/ABV1D200528CKC7N.jpg'
                        alt=''
                        className='last_sub_row-1_image'
                      />
                    </Link>
                  </div>
                  <div className='row-2_sub_col'>
                    <Link to='/shop/6148d111043d544188162d32'>
                      <div className='card_description'>
                        Smart Watch Mens Heart Rate Blood Pressure Oxygen...
                      </div>
                    </Link>
                    <div className='card_prev_price'>৳ 80,000</div>
                    <div className='card_new_price'>
                      <span>৳</span> 2,999
                    </div>
                  </div>
                </div>
              </div>
              <div className='card_last_row-2'>
                <div className='card_heading'>Today's Deal</div>
                <div className='row-2_sub_container'>
                  <div className='row-2_sub_col'>
                    <Link to='#'>
                      <img
                        src='/images/bestDeals/A7ABD2106175Q5NE.jpg'
                        alt=''
                        className='last_sub_row-1_image custom_img-1'
                      />
                    </Link>
                  </div>
                  <div className='row-2_sub_col'>
                    <Link to='/shop/6148d1fe043d544188162d33'>
                      <div className='card_description'>
                        ASUS Laptop VivoBook S K712EA-DS76 Intel Core i7 11th...
                      </div>
                    </Link>
                    <div className='card_prev_price'>৳ 80,000</div>
                    <div className='card_new_price'>
                      <span>৳</span> 70,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyDealsSection;
