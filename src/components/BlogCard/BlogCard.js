import React from 'react';
import './BlogCard.css';
import blog1 from '../../images/blog-1.jpg';
import { Link } from 'react-router-dom';
const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img className="img-fluid" src={blog1} alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 dec 2022</p>
          <h5 className="blog-title">A beautiful sunny morning</h5>
          <p className="blog-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, accusamus.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
