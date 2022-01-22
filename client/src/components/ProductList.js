import React from "react";
import styles from "../components/styles/productList.module.css";
import { Link } from "react-router-dom";
const ProductList = ({ product }) => {
  return (
    <div className={styles.products_container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to={`/shop/${product._id}`}>
              <img src={product.image} alt='' className={styles.product_img} />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to={`/shop/${product._id}`}>
              {product.name.length > 100
                ? product.name.substring(0, 62) + "........"
                : product.name}
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            {product.price > 999.99 &&
              product.price < 9999.99 &&
              product.price.toString().substring(0, 1) +
                "," +
                product.price.toString().substring(1, 4)}

            {product.price > 9999.99 &&
              product.price < 99999.99 &&
              product.price.toString().substring(0, 2) +
                "," +
                product.price.toString().substring(2, 5)}

            {product.price > 99999.99 &&
              product.price < 999999.99 &&
              product.price.toString().substring(0, 1) +
                "," +
                product.price.toString().substring(1, 3) +
                "," +
                product.price.toString().substring(3, 6)}

            {product.price <= 999 && product.price}
            {/* {product.price} */}
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to={`/shop/${product._id}`}>VIEW DETAILS {">"}</Link>
          </span>
        </div>
      </div>
      {/* <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
<<<<<<< HEAD
        </div> */}
      {/* <div className={styles.row}>
=======
        </div>
      </div>
      <div className={styles.row}>
>>>>>>> 1eacdda188d85fd152442a0e00bb65e17d3ba5eb
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link to='#'>
              <img
                src='/images/shopPage/89-007-773-V08.jpg'
                alt=''
                className={styles.product_img}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to='#'>
              LG OLED77C1PUB 4K Smart OLED TV w/ AI THinQ (2021)
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            3,296.99
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link to='#'>VIEW DETAILS {">"}</Link>
          </span>
        </div>

      </div> */}
    </div>
  );
};

export default ProductList;
