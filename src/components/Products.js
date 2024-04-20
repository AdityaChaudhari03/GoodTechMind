import React, { useState } from "react";
import "./Products.css";
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
    <div className="products-container">
      <div className="products-heading">
        <hr className="line" />
        <h1 className="heading">Products</h1>
        <hr className="line" />
      </div>
      <div className="product-cards">
        {/* Product Cards */}
        <div className="product-card">
          <div className="productImage">
            <img src={Product1} alt="Product" />
          </div>
          <div className="product-info">
            <p className="product-description">Product 1 description</p>
            <p className="product-price">$10</p>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="product-card">
          <div className="productImage">
            <img src={Product2} alt="Product" />
          </div>
          <div className="product-info">
            <p className="product-description">Product 2 description</p>
            <p className="product-price">$20</p>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="product-card">
          <div className="productImage">
            <img src={Product3} alt="Product" />
          </div>
          <div className="product-info">
            <p className="product-description">Product 3 description</p>
            <p className="product-price">$30</p>
            <button>BUY NOW</button>
          </div>
        </div>
        {/* Additional product cards, hidden by default */}
        {showAllProducts && (
          <>
            <div className="product-card">
              <div className="productImage">
                <img src={Product4} alt="Product" />
              </div>
              <div className="product-info">
                <p className="product-description">Product 4 description</p>
                <p className="product-price">$40</p>
                <button>BUY NOW</button>
              </div>
            </div>
            <div className="product-card">
              <div className="productImage">
                <img src={Product5} alt="Product" />
              </div>
              <div className="product-info">
                <p className="product-description">Product 5 description</p>
                <p className="product-price">$50</p>
                <button>BUY NOW</button>
              </div>
            </div>
            <div className="product-card">
              <div className="productImage">
                <img src={Product6} alt="Product" />
              </div>
              <div className="product-info">
                <p className="product-description">Product 6 description</p>
                <p className="product-price">$60</p>
                <button>BUY NOW</button>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Show All Products button */}
      <button className="show-all-button" onClick={toggleShowAllProducts}>
        {showAllProducts ? "Show Less Products" : "Show All Products"}
      </button>
    </div>
  );
};

export default ProductsPage;
