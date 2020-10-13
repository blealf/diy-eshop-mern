import React from 'react';
import '../../styles/Homepage.scss'
import {FiTruck} from 'react-icons/fi';
import {BiDollarCircle} from 'react-icons/bi';
import {FaBoxOpen} from 'react-icons/fa';
import Carousel from '../Carousel/Carousel';
import StarRating from '../Product/StarRating';

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <div className="assurance">
        <div className="assuranceItem">
          <div className="assuranceIcon">
            <FiTruck />
          </div>
          <div className="assuranceText">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="assuranceItem">
          <div className="assuranceIcon">
            <BiDollarCircle />
          </div>
          <div className="assuranceText">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="assuranceItem">
          <div className="assuranceIcon">
            <FaBoxOpen />
          </div>
          <div className="assuranceText">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>

      <div className="homepageDeals">
        <div className="dealsTitle">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="dealWrapper">
          <a href="">
            <div className="dealItem">
              <div className="dealImage">
                <img src="/images/pic1.jpg" alt=""/>
              </div>
              <div className="dealInfo">
                <div className="dealTitle">
                  Lorem ipsum dolor sit amet
                </div>
                <div className="dealReview">
                  <StarRating rating={4.2} /> <span>(3562 Reviews)</span>
                </div>
                <div className="dealPrice">
                  <h2>$499.99 <span>SAVE $50</span></h2>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="dealItem">
              <div className="dealImage">
                <img src="/images/pic1.jpg" alt=""/>
              </div>
              <div className="dealInfo">
                <div className="dealTitle">
                  Lorem ipsum dolor sit amet
                </div>
                <div className="dealReview">
                  <StarRating rating={4.2} /> <span>(3562 Reviews)</span>
                </div>
                <div className="dealPrice">
                  <h2>$499.99 <span>SAVE $50</span></h2>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="dealItem">
              <div className="dealImage">
                <img src="/images/pic3.jpg" alt=""/>
              </div>
              <div className="dealInfo">
                <div className="dealTitle">
                  Lorem ipsum dolor sit amet
                </div>
                <div className="dealReview">
                  <StarRating rating={4.2} /> <span>(3562 Reviews)</span>
                </div>
                <div className="dealPrice">
                  <h2>$499.99 <span>SAVE $50</span></h2>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="dealItem">
              <div className="dealImage">
                <img src="/images/pic2.jpg" alt=""/>
              </div>
              <div className="dealInfo">
                <div className="dealTitle">
                  Lorem ipsum dolor sit amet
                </div>
                <div className="dealReview">
                  <StarRating rating={4.2} /> <span>(3562 Reviews)</span>
                </div>
                <div className="dealPrice">
                  <h2>$499.99 <span>SAVE $50</span></h2>
                </div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="dealItem">
              <div className="dealImage">
                <img src="/images/pic1.jpg" alt=""/>
              </div>
              <div className="dealInfo">
                <div className="dealTitle">
                  Lorem ipsum dolor sit amet
                </div>
                <div className="dealReview">
                  <StarRating rating={4.2} /> <span>(3562 Reviews)</span>
                </div>
                <div className="dealPrice">
                  <h2>$499.99 <span>SAVE $50</span></h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="assurance">
        <div className="assuranceItem">
          <div className="assuranceIcon">
            <FiTruck />
          </div>
          <div className="assuranceText">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="assuranceItem">
          <div className="assuranceIcon">
            <BiDollarCircle />
          </div>
          <div className="assuranceText">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="assuranceItem">
          <div className="assuranceIcon">
            <FaBoxOpen />
          </div>
          <div className="assuranceText">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
