import React from "react";
import "./BlogsPage.css";
import Img1 from "../Images/img1.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";

const BlogsPage = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-heading">
        <hr className="line" />
        <h1 className="heading">Blogs</h1>
        <hr className="line" />
      </div>
      <div className="recent-articles">
        <div className="text">
          <h4 className="recent-article-text">Recent Articles</h4>
          <h2 className="read-news-heading">Read All News</h2>
        </div>
        <div className="loremtext"> 
          <p className="recent-articles-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit,
            voluptates quas et dolorem quasi doloremque est consequatur
            consequuntur accusamus?
          </p>
        </div>
      </div>
      <div className="blog-cards">
        <div className="blog-card">
          <div className="blogImage">
            <img src={Img1} alt="Blog" />
            <p className="imagetext">Design Code</p>
          </div>
          <div className="blog-info">
            <p className="blog-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              laudantium dolorum veniam aliquid, error aperiam?
            </p>
            <p className="blog-date">06 May 2022</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="blog-card">
          <div className="blogImage">
            <img src={Img2} alt="Blog" />
            <p className="imagetext">Design Code</p>
          </div>
          <div className="blog-info">
            <p className="blog-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              exercitationem iusto culpa molestiae voluptate necessitatibus.
            </p>
            <p className="blog-date">06 May 2022</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="blog-card">
          <div className="blogImage">
            <img src={Img3} alt="Blog" />
            <p className="imagetext">Design, Code</p>
          </div>
          <div className="blog-info">
            <p className="blog-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, et
              dolor. Numquam consectetur quis beatae!
            </p>
            <p className="blog-date">06 May 2022</p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
