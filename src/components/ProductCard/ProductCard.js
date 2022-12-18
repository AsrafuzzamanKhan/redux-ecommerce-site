import React from 'react';
import './ProductCard.css';
import ReactStars from 'react-rating-stars-component';
import watch from '../../images/watch.jpg';
import watch1 from '../../images/watch-3.jpg';
import tab from '../../images/tab.jpg';
import tab1 from '../../images/tab1.jpg';
import addCart from '../../images/add-cart.svg';
import compare from '../../images/prodcompare.svg';
import wishList from '../../images/wish.svg';
import view from '../../images/view.svg';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wishList} alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="product" />
          <img src={watch1} className="img-fluid" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids Headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="product-price">$1000.00</p>
        </div>
        <div className="action-bar position-absolute ">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={view} alt="view" />
            </Link>
            <Link>
              <img src={compare} alt="compare" />
            </Link>
            <Link>
              <img src={addCart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
