import React from 'react';
import '../../styles/Carousel.scss';

const Slide = ({ image, currentSlide }) => {
  return (
    <div className={"slides " + currentSlide}  >
      <div className="dimSlide">
        <div className="slideAnnotation">
          <div className="leftSide">
            <div className="slideTitle">Sale</div>
            <div className="slideSubtitle">The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href </div>
            <div className="callToAction">
              <a href="#">Shop Now</a>
            </div>
          </div>
          <div className="rightSide">
          <div>
            <img src={image} alt=""/>
          </div>
          </div>
        </div>
      </div>
      <img src={image} alt=""/>
    </div>
  )
}

export default Slide;
