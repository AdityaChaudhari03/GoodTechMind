import React from 'react';
import Img4 from "../Images/img4.png"
import styles from "./ProductDetails.module.css";
import ProductDetailsPage from './ProductDetailsPage';
import CustomerReviewPage from './CustomerReview';

const ProductDetails = () => {
  return (
    <div>
      <div className={styles.productDetailsContainer}>
      <div className={styles.productImage}>
        <img src={Img4} alt="Product" width={220} height={440}/>
        <div className={styles.buyButtons}>
            <button className={styles.addToCartButton}>ADD TO CART</button>
            <button className={styles.buyNowButton}>⚡BUY NOW</button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>Win Go Betting Web Game</h2>
        <div className={styles.productRating}>
          <div className={styles.ratingBox}>
            <span className={styles.rating}>4.5 ⭐</span>
            <span className={styles.ratingAndReview}>1,32 Ratings & 197 Review</span>  
          </div>
        </div>
        <div className={styles.productPrice}>
            <span className={styles.newPrice}>₹1,29,999</span>
            <span className={styles.oldPrice}>₹1,29,999</span>
            <span className={styles.discount}>3% off</span>
        </div>
        <div className={styles.availableOffers}>
          <h3>Available Offers</h3>
          <ul>
            <li><strong className={styles.bankOffer}>🏷️ Bank Offer</strong> 10% Upto ₹2500 on Axis Bank Signature credit card <span className='terms'>T & C</span></li>
            <li><strong className={styles.bankOffer}>🏷️ Bank Offer</strong> 10% Upto ₹5000 on Axis Bank Infinite credit card <span className='terms'>T & C</span></li>
          </ul>
        </div>
        <div className={styles.moreOffers}>
            <h3 className={styles.moreOffersHeading}>View 7 more offers</h3>
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
