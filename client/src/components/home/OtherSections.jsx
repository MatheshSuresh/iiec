import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/other-sections.module.css";
const OtherSections = () => {
  return (
    <>
      <div style={{ marginTop: "120px" }} className={styles.cool_look_section}>
        <div className={styles.title}>Cool Look For Less</div>
        <div className={styles.container}>
          <div className={styles.row}>
            <Link to='#'>
              <div className={styles.col}>
                <div className={styles.cool_image_container}>
                  <img
                    src='/images/cheapFeature/1.jpg'
                    alt=''
                    className={styles.cool_image}
                  />
                  <div className={styles.cool_content_container}>
                    <div className={styles.content_title}>Young Adult</div>
                    <br />
                    <span className={styles.content_title_2nd_line}>From</span>
                    <br />
                    <div className={styles.money_container}></div>
                    <span className={styles.money_sign}> ৳</span>
                    <span className={styles.price}>449</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='#'>
              <div className={styles.col}>
                <div className={styles.cool_image_container}>
                  <img
                    src='/images/cheapFeature/2.jpg'
                    alt=''
                    className={styles.cool_image}
                  />
                  <div className={styles.cool_content_container}>
                    <div className={styles.content_title}>Kid's</div>
                    <br />
                    <span className={styles.content_title_2nd_line}>From</span>
                    <br />
                    <div className={styles.money_container}></div>
                    <span className={styles.money_sign}> ৳</span>
                    <span className={styles.price}>399</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='#'>
              <div className={styles.col}>
                <div className={styles.cool_image_container}>
                  <img
                    src='/images/cheapFeature/3.jpg'
                    alt=''
                    className={styles.cool_image}
                  />
                  <div className={styles.cool_content_container}>
                    <div className={styles.content_title}>Men's </div>
                    <br />
                    <span className={styles.content_title_2nd_line}>From</span>
                    <br />
                    <div className={styles.money_container}></div>
                    <span className={styles.money_sign}> ৳</span>
                    <span className={styles.price}>529</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='#'>
              <div className={styles.col}>
                <div className={styles.cool_image_container}>
                  <img
                    src='/images/cheapFeature/4.jpg'
                    alt=''
                    className={styles.cool_image}
                  />
                  <div className={styles.cool_content_container}>
                    <div className={styles.content_title}>Women's</div>
                    <br />
                    <span className={styles.content_title_2nd_line}>From</span>
                    <br />
                    <div className={styles.money_container}></div>
                    <span className={styles.money_sign}> ৳</span>
                    <span className={styles.price}>799</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.con_container}>
          <div className={`${styles.title} mb-4`}>Contactless Delivery</div>
          <div className={styles.con_row}>
            <div className={styles.con_col}>
              <div className={styles.contactless_container}>
                <img
                  src='/images/Delivery_SB_1200x300-201030-1604068255716(1).jpg'
                  alt=''
                  className={styles.contactless_img}
                />
                <div className={styles.contactless_content}>
                  Your Shipt shopper will leave your order right at your
                  doorstep. Begin your free 4-week trial or pay ৳50.00 per
                  delivery. Start your order
                </div>
              </div>
            </div>
            <div className={styles.con_col}>
              <div className={styles.contactless_container}>
                <img
                  src='/images/DU_300223316-200402_1585835841851.jpg'
                  alt=''
                  className={styles.contactless_img}
                />
                <div className={styles.contactless_content}>
                  Your Shipt shopper will leave your order right at your
                  doorstep. Begin your free 4-week trial or pay ৳50.00 per
                  delivery. Start your order
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.con_container}>
          <div className={`${styles.title} mb-4`}>Covid-19 Info & Updates</div>
          <div className={styles.covid_row}>
            <div className={styles.covid_col}>
              <a href='https://surokkha.gov.bd/'>
                <div className={styles.covid_info_container}>
                  <img
                    src='/images/Vaccine_D-210810-1628610814413.jpg'
                    alt=''
                    className={styles.awareness_img}
                  />
                  <div className={styles.covid_info_content}>
                    <div className={styles.main_title}>
                      Book Your Covid 19 vaccine now
                    </div>
                    <div className={styles.sub_title}>
                      Make an appointment for your free vaccine through IIEC
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.covid_col}>
              <Link to='#'>
                <div className={styles.covid_info_container}>
                  <img
                    src='/images/JusticeDesktop-210318-1616086427283.jpg'
                    alt=''
                    className={styles.awareness_img}
                  />
                  <div className={styles.covid_info_content}>
                    <div className={styles.main_title}>
                      Book Your Covid 19 vaccine now
                    </div>
                    <div className={styles.sub_title}>
                      Let’s move toward a more equitable & regenerative future
                      together.
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.covid_col}>
              <Link to='#'>
                <div className={styles.covid_info_container}>
                  <img
                    src='/images/Forward_D-210810-1628610863584.jpg'
                    alt=''
                    className={styles.awareness_img}
                  />
                  <div className={styles.covid_info_content}>
                    <div className={styles.main_title}>
                      Book Your Covid 19 vaccine now
                    </div>
                    <div className={styles.sub_title}>
                      Now Available at IIEC
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherSections;
