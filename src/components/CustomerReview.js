import React from 'react';
import styles from "./CustomerReview.module.css";

const CustomerReviewPage = () => {
  return (
    <div className={styles.customerReviewContainer}>
      <h1>Customer Reviews</h1>
      <div className={styles.reviewCard}>
        <div className={styles.reviewHeader}>
          <div className={styles.reviwerInfo}>
            <h2>John Doe</h2>
            <p>5 Stars</p>
          </div>
        </div>
        <p className={styles.reviewText}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          ligula eu purus congue fermentum. Integer nec magna eget sapien
          scelerisque consequat."
        </p>
      </div>
      <div className={styles.reviewCard}>
        <div className={styles.reviewHeader}>
          <div className={styles.reviewerInfo}>
            <h2>Jane Smith</h2>
            <p>4 Stars</p>
          </div>
        </div>
        <p className={styles.reviewText}>
          "Sed ultricies libero nec orci consectetur, nec bibendum elit
          efficitur. Integer at justo quis tortor condimentum laoreet."
        </p>
      </div>
    </div>
  );
};

export default CustomerReviewPage;
