import React from "react";
import styles from "../styles/featured-category.module.css";
import { Link } from "react-router-dom";
const FeaturedCatagory = () => {
  return (
    <>
      <div className={styles.featuredCategory}>
        <div className={styles.title}>Featured Categories</div>
        <div className={styles.subtitle}>
          <Link to='#'>Shop All</Link>
        </div>
        <div className={styles.category_container}>
          <div className={styles.category_row}>
            <div className={styles.category_col}>
              <div className={styles.feaured_img_container}>
                <Link to='/shop/search/girls'>
                  <img
                    src='/images/featured/1.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/shop/search/girls'>Kid's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.feaured_img_container}>
                <Link to='/search/men'>
                  <img
                    src='/images/featured/2.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/men'>Men's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/women'>
                  <img
                    src='/images/featured/3.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/women'>Women's</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/school'>
                  <img
                    src='/images/featured/4.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/school'>Ready For School</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/home'>
                  <img
                    src='/images/featured/5.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/home'>Home</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.feaured_img_container}>
                <Link to='/shop/search/fashion'>
                  <img
                    src='/images/featured/6.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/shop/search/fashion'>Fashion</Link>
              </div>
            </div>
          </div>

          <div className={styles.category_row}>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/shop/search/gaming'>
                  <img
                    src='/images/featured/7.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/shop/search/gaming'>Gaming</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/furniture'>
                  <img
                    src='/images/featured/8.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/furniture'>Furniture</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/Outdoor and bicycle'>
                  <img
                    src='/images/featured/9.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/Outdoor and bicycle'>
                  Sports {"&"} Outdoor
                </Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/baby'>
                  <img
                    src='/images/featured/10.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/baby'>Baby</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/cosmetics'>
                  <img
                    src='/images/featured/11.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/cosmetics'>Makeup {"&"} Cosmetics</Link>
              </div>
            </div>
            <div className={styles.category_col}>
              <div className={styles.featured_img_container}>
                <Link to='/search/electronics'>
                  <img
                    src='/images/featured/12.jpg'
                    alt='featured image'
                    className={styles.featured_img}
                  ></img>
                </Link>
              </div>
              <div className={styles.img_caption}>
                <Link to='/search/electronics'>Electronics</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCatagory;
