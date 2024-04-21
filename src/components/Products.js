import React, { useState } from "react";
import styles from "./Products.module.css";
import Product1 from "../Images/img1.jpg";
import Product2 from "../Images/img2.jpg";
import Product3 from "../Images/img3.jpg";
import Product4 from "../Images/img1.jpg";
import Product5 from "../Images/img2.jpg";
import Product6 from "../Images/img3.jpg";

const ProductsPage = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Function to toggle the display of additional product cards
  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHeading}>
        <hr className={styles.line} />
        <h1 className={styles.heading}>Products</h1>
        <hr className={styles.line} />
      </div>
      <div className={styles.productCards}>
        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={Product1} alt="Product" />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productDescription}>Product 1 description</p>
            <p className={styles.productPrice}>$10</p>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={Product3} alt="Product" />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productDescription}>Product 1 description</p>
            <p className={styles.productPrice}>$10</p>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={Product2} alt="Product" />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productDescription}>Product 1 description</p>
            <p className={styles.productPrice}>$10</p>
            <button>BUY NOW</button>
          </div>
        </div>
        {showAllProducts && (
          <>
            <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={Product1} alt="Product" />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productDescription}>Product 1 description</p>
            <p className={styles.productPrice}>$10</p>
            <button>BUY NOW</button>
          </div>
        </div>
            <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={Product2} alt="Product" />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productDescription}>Product 1 description</p>
            <p className={styles.productPrice}>$10</p>
            <button>BUY NOW</button>
          </div>
        </div>
            <div className={styles.productCard}>
          <div className={styles.productImage}>
            <img src={Product3} alt="Product" />
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productDescription}>Product 1 description</p>
            <p className={styles.productPrice}>$10</p>
            <button>BUY NOW</button>
          </div>
        </div>
          </>
        )}
      </div>
      <button className={styles.showAllButton} onClick={toggleShowAllProducts}>
        {showAllProducts ? "Show Less Products" : "Show All Products"}
      </button>
    </div>
  );
};

export default ProductsPage;
