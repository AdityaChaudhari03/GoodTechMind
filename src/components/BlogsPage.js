import React from "react";
// import "./BlogsPage.css";
import styles from "./BlogsPage.module.css";
import Img1 from "../Images/img1.jpg";
import Img2 from "../Images/img2.jpg";
import Img3 from "../Images/img3.jpg";

const BlogsPage = () => {
  return (
    <div className={styles.blogsContainer}>
      <div className={styles.blogsHeading}>
        <hr className={styles.line} />
        <h1 className={styles.heading}>Blogs</h1>
        <hr className={styles.line} />
      </div>
      <div className={styles.recentArticles}>
        <div className={styles.text}>
          <h4 className={styles.recentArticleText}>Recent Articles</h4>
          <h2 className={styles.readNewsHeading}>Read All News</h2>
        </div>
        <div className={styles.loremtext}> 
          <p className={styles.recentArticlesPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit,
            voluptates quas et dolorem quasi doloremque est consequatur
            consequuntur accusamus?
          </p>
        </div>
      </div>
      <div className={styles.blogCards }>
        <div className={styles.blogCard}>
          <div className={styles.blogImage}>
            <img src={Img1} alt="Blog" />
            <p className={styles.imagetext}>Design Code</p>
          </div>
          <div className={styles.blogInfo}>
            <p className={styles.blogDescription }>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              laudantium dolorum veniam aliquid, error aperiam?
            </p>
            <p className={styles.blogDate}>06 May 2022</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div className={styles.blogCard}>
          <div className={styles.blogImage}>
            <img src={Img2} alt="Blog" />
            <p className={styles.imagetext}>Design Code</p>
          </div>
          <div className={styles.blogInfo}>
            <p className={styles.blogDescription }>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              laudantium dolorum veniam aliquid, error aperiam?
            </p>
            <p className={styles.blogDate}>06 May 2022</p>
            <button>READ MORE</button>
          </div>
        </div>
        <div className={styles.blogCard}>
          <div className={styles.blogImage}>
            <img src={Img3} alt="Blog" />
            <p className={styles.imagetext}>Design Code</p>
          </div>
          <div className={styles.blogInfo}>
            <p className={styles.blogDescription }>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              laudantium dolorum veniam aliquid, error aperiam?
            </p>
            <p className={styles.blogDate}>06 May 2022</p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
