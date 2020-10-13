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
        <div className="pDetailsPurchase">
          <div className="saleSave">SAVE $50</div>
          <div className="price">$599<span>99</span></div>
          <div className="saleEnd">
            SALE ends: October 14, 2020
          </div>
          <div className="cartAndWish">
            <a href="#"><div>Add To Cart</div></a>
            <a href="#"><div>Add To Wishlist</div></a>
          </div>
          <div className="storeInfo">
            <h3>Sold By: <span><a href="#">Oceanic Store</a></span> </h3>

            <div className="delivery">
              <h3>Ships in 48 hours</h3>
              <h3>Delivery: <span>5 business days</span></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="pDetailsDescription">
        <div className="pDetailsOverview">
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore amet porro reprehenderit ipsam odio fugit voluptatem voluptatum voluptates maxime sequi assumenda laborum mollitia, dolores a ea optio itaque. Vel corporis natus excepturi ut quaerat dolorum blanditiis! Libero necessitatibus blanditiis fuga voluptatum inventore, deserunt tempore officia. Atque, enim ducimus. Sunt similique non incidunt delectus pariatur, cupiditate nostrum. Officiis explicabo maxime, laudantium error facere corrupti eaque labore repudiandae expedita quidem dolorum excepturi fugiat odio deleniti cum illo doloremque nihil quas alias nisi eius voluptas, voluptates hic tempora. Quisquam nemo aliquid eos harum culpa, at, quod ullam est doloribus libero saepe molestias?</p>
        </div>
        <div className="pDetailsInfo">
          <h2>More Information</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus laboriosam quis quisquam fugit accusantium tempore cumque odio facere animi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus laboriosam quis quisquam fugit accusantium tempore cumque odio facere animi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus laboriosam quis quisquam fugit accusantium tempore cumque odio facere animi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus laboriosam quis quisquam fugit accusantium tempore cumque odio facere animi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus laboriosam quis quisquam fugit accusantium tempore cumque odio facere animi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus laboriosam quis quisquam fugit accusantium tempore cumque odio facere animi.</li>
          </ul>
        </div>
      </div>
      <div className="pDetailsReviews">
        <h2>Reviews</h2>
      </div>
      <div className="returnPolicy">
        <h2>Return Policy</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores labore harum perspiciatis sapiente unde inventore eos minima soluta! Impedit porro magnam deserunt eum quas at sit beatae corrupti velit obcaecati sunt labore reiciendis suscipit eos esse, ipsam saepe natus. Vero illum numquam distinctio dignissimos dolor suscipit quod officiis tempore saepe.</p>
      </div>
    </div>
  )
}

export default ProductDetails
