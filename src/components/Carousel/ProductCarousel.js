import React, { useState, useEffect, useRef } from 'react';
import '../../styles/ProductCarousel.scss';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


const ProductCarousel = () => {
  // const [itemSlides, setItemSlides] = useState([]);

  const slideHolder = useRef();
  const slideNav = useRef();
  const prevButton = useRef();
  const nextButton = useRef();
  const navWrapper = useRef();

  useEffect(() => {
    prepareItemSlider();
  }, [])

  const prepareItemSlider = () => {
    const slideParent = slideHolder.current;
    const slides = Array.from(slideParent.children);
    const slideWidth = slides[0].getBoundingClientRect().width
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    })
    

    const slideNavParent = slideNav.current;
    const slideNavs = Array.from(slideNavParent.children);
    const slideNavWidth = slideNavs[0].getBoundingClientRect().width;
    slideNavs.forEach((nav, index) => {
      nav.style.left = (slideNavWidth * index) + 'px';
    })
    const slideNavParentWrapper = navWrapper.current;
    return{
      slideParent,
      slides,
      slideWidth,
      slideNavParent,
      slideNavs,
      slideNavWidth,
      slideNavParentWrapper
    }
  } 

  const moveToTargetSlide = (currentItem, targetItem) => {
    const slideParent = prepareItemSlider().slideParent;
    const amountToMove = targetItem.style.left;
    slideParent.style.transform = 'translateX(-' + amountToMove + ')';
    currentItem.classList.remove('currentItem');
    targetItem.classList.add('currentItem');
  }

  const nextSlideSet = () => {
    //if number of navElement is less than 4 don't move
    const navAmount = prepareItemSlider().slideNavs.length;
    if (navAmount < 4) return

    //if more than four loop by number/four i.e i > num/4
    const slideNavWidth = prepareItemSlider().slideNavWidth;
    const navWrapperWidth = prepareItemSlider().slideNavParentWrapper.getBoundingClientRect().width;
    const lastSlideLeft = parseInt(prepareItemSlider().slideNavs[navAmount-1].style.left)
    if((slideNavWidth) <  lastSlideLeft){
        const slideNavParent = prepareItemSlider().slideNavParent;
        const currentTransform = parseInt(slideNavParent.style.transform.slice(12))
        const amountToMove =  currentTransform > 0 ?  currentTransform + navWrapperWidth : navWrapperWidth;
      if(amountToMove < lastSlideLeft){
        slideNavParent.style.transform = 'translateX(-' + amountToMove + 'px)';
      }
    }
  }

  const prevSlideSet = () => {
    //if number of navElement is less than 4 don't move
    const navAmount = prepareItemSlider().slideNavs.length;
    if (navAmount < 4) return

    //if more than four loop by number/four i.e i > num/4
    const navWrapperWidth = prepareItemSlider().slideNavParentWrapper.getBoundingClientRect().width;
    const slideNavParent = prepareItemSlider().slideNavParent;
    const currentTransform = parseInt(slideNavParent.style.transform.slice(12))
    const amountToMove =  currentTransform > 0 ?  currentTransform - navWrapperWidth : 0;
    console.log(currentTransform)
    if(currentTransform > 0){
      console.log(amountToMove);
      slideNavParent.style.transform = 'translateX(' + (-amountToMove) + 'px)';
    }
  }

  const goToSlide = (e) => {
    const currentSlideNav = e.target;
    const prevSlideNav = document.querySelector('.currentNavItem');
    const navIndex = prepareItemSlider().slideNavs.findIndex(nav => nav === currentSlideNav)
    console.log(navIndex);
    const currentSlide = document.querySelector('.currentItem');
    const targetSlide = prepareItemSlider().slides[navIndex];
    console.log(currentSlide)
    moveToTargetSlide(currentSlide, targetSlide);
    prevSlideNav.classList.remove('currentNavItem');
    currentSlideNav.classList.add('currentNavItem');
  }
 
  return (
    <div className="productCarousel">
      <div className="imageHolder" ref={slideHolder}>
        <div className="pSlides currentItem">
          <img src="./images/pic1.jpg" alt=""/>
        </div>
        <div className="pSlides">
          <img src="./images/pic2.jpg" alt=""/>
        </div>
        <div className="pSlides">
          <img src="./images/pic3.jpg" alt=""/>
        </div>
        <div className="pSlides">
          <img src="" alt=""/>
        </div>
        <div className="pSlides">
          <img src="" alt=""/>
        </div>
        <div className="pSlides">
          <img src="" alt=""/>
        </div>
        <div className="pSlides">
          <img src="" alt=""/>
        </div>
      </div>
      <div className="productCarouselNav">
        <span className="pLeft" ref={prevButton} onClick={prevSlideSet}>
          <FaChevronLeft />
        </span>
        <div className="imageNavWrapper" ref={navWrapper}>
          <div className="imageNav" ref={slideNav}>
            <button 
              className="imageNavItem currentNavItem"
              onClick={goToSlide}
              style={{
                backgroundImage: 'url("/images/pic1.jpg")',
              }}
            ></button>
            <button 
              className="imageNavItem"
              onClick={goToSlide}
              style={{
                backgroundImage: 'url("/images/pic2.jpg")',
              }}
            ></button>
            <button 
              className="imageNavItem"
              onClick={goToSlide}
              style={{
                backgroundImage: 'url("/images/pic3.jpg")',
              }}
            ></button>
            <button onClick={goToSlide}></button>
            <button onClick={goToSlide}></button>
            <button onClick={goToSlide}></button>
            <button onClick={goToSlide}></button>
          </div>
        </div>
        <span className="pRight" ref={nextButton} onClick={nextSlideSet}>
          <FaChevronRight />
        </span>
      </div>
    </div>
  )
}

export default ProductCarousel
