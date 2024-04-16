import React from 'react';
import "./CustomerReview.css"

const CustomerReviewPage = () => {
  return (
    <div className="customer-review-container">
      <h1>Customer Reviews</h1>
      <div className="review-card">
        <div className="review-header">
          <div className="reviewer-info">
            <h2>John Doe</h2>
            <p>5 Stars</p>
          </div>
        </div>
        <p className="review-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          ligula eu purus congue fermentum. Integer nec magna eget sapien
          scelerisque consequat."
        </p>
      </div>
      <div className="review-card">
        <div className="review-header">
          <div className="reviewer-info">
            <h2>Jane Smith</h2>
            <p>4 Stars</p>
          </div>
        </div>
        <p className="review-text">
          "Sed ultricies libero nec orci consectetur, nec bibendum elit
          efficitur. Integer at justo quis tortor condimentum laoreet."
        </p>
      </div>
    </div>
  );
};

export default CustomerReviewPage;
