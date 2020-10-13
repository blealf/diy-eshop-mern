import React from 'react';
import '../../styles/ProductDetails.scss';
import ProductCarousel from '../Carousel/ProductCarousel';
import StarRating from './StarRating';

/* eslint-disable */
const ProductDetails = () => {
  return (
    <div className="pDetailsWrapper">
      <div className="pDetailsHeader">
        <div className="pDetailsBreadCrumbs">
          something &gt; something &gt; something &gt; something &gt;
        </div>
        <div className="pDetailsMetaData">
          <div className="pDetailsTitle">
            Some Title Here
          </div>
          <div className="pModelInfo">
            <h4>Model Number: <span>123456789</span></h4>
            <h4>Brand: <span>SAMSUNG</span></h4>
          </div>
          <div className="pDetailsPoints">
            <StarRating rating={4.7}/>
            <div><a href="#"><strong>4.7</strong> (32499 Reviews)</a></div>
            <div><a href="#">Write a review &gt;</a></div>
          </div>
        </div>
      </div>
      <div className="pDetailsMain">
        <div className="pDetailsPicture">
          <ProductCarousel />
        </div>
        <div className="pDetailsHighlights"></div>
      </div>
      <div className="pDetailsDescription">
        <div className="pDetailsOverview"></div>
        <div className="pDetailsInfo"></div>
      </div>
    </div>
  )
}

export default ProductDetails
