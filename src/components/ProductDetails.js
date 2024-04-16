import React from 'react';
import Img4 from "../Images/img4.png"
import './ProductDetails.css';
import ProductDetailsPage from './ProductDetailsPage';
import CustomerReviewPage from './CustomerReview';

const ProductDetails = () => {
  return (
    <div>
      <div className="product-details-container">
      <div className="product-image">
        <img src={Img4} alt="Product" width={220} height={440}/>
        <div className='buy-buttons'>
            <button className='add-to-cart-button'>ADD TO CART</button>
            <button className='buy-now-button'>⚡BUY NOW</button>
        </div>
      </div>
      <div className="product-info">
        <h2 className="product-title">Win Go Betting Web Game</h2>
        <div className="product-rating">
          <div className="rating-box">
            <span className="rating">4.5 ⭐</span>
            <span className='rating-and-review'>1,32 Ratings & 197 Review</span>  
          </div>
        </div>
        <div className="product-price">
            <span className='new-price'>₹1,29,999</span>
            <span className='old-price'>₹1,29,999</span>
            <span className='discount'>3% off</span>
        </div>
        <div className="available-offers">
          <h3>Available Offers</h3>
          <ul>
            <li><strong className='bank-offer'>🏷️ Bank Offer</strong> 10% Upto ₹2500 on Axis Bank Signature credit card <span className='terms'>T & C</span></li>
            <li><strong className='bank-offer'>🏷️ Bank Offer</strong> 10% Upto ₹5000 on Axis Bank Infinite credit card <span className='terms'>T & C</span></li>
          </ul>
        </div>
        <div className='more-offers'>
            <h3 className='more-offers-heading'>View 7 more offers</h3>
            <ul>
                <li>3 Month Ongoing Support</li>
                <li>3 Month Ongoing Support</li>
                <li>3 Month Ongoing Support</li>
                <li>3 Month Ongoing Support</li>
          </ul>
        </div>
      </div>
    </div>
    <ProductDetailsPage />
    <CustomerReviewPage />
    </div>
  );
};

export default ProductDetails;
