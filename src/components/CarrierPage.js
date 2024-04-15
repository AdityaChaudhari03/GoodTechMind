import React, { useState, useEffect } from "react";
import "./CarrierPage.css";
import Img1 from "../Images/img1.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";

const images = [Img1, Img2, Img3];

const CarrierPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change the duration (in milliseconds) for each slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="blogs-heading">
        <hr className="line" />
        <h1 className="heading">Carrier</h1>
        <hr className="line" />
      </div>
      <div className="card-container">
        <div className="card-content">
          <div className="card-left">
            <h2>Carrier at Good Tech Mind</h2>
            <p>We invite you to supercharge your potential. Find what inspires and drives you. Find your spark.</p>
            <button>Visit our Career Page →</button>
          </div>
          <div>
            <img
              src={images[currentImage]}
              alt="Animated content"
              className="animated-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierPage;
