import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Carousel.scss';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Slide from './Slide';


const Carousel = () => {
  const images = [
    {image: "/images/pic1.jpg"},
    {image: "/images/pic2.jpg"},
    {image: "/images/pic4.jpg"}
  ]
  const [ slideImages, setSlideImages ] = useState(images);
  var dummy = 0;

  const trackContainer = useRef();
  const dotContainer = useRef();
  const prevButton = useRef();
  const nextButton = useRef();

  useEffect(() => {
      prepareSlider();
      setTimeout(() => {
        autoSlide();
      }, 5000)
  }, [])

  const prepareSlider = () => {
    const track = trackContainer.current;
    const slides = Array.from(track.children);
    const dotsNav = dotContainer.current;
    const dots = Array.from(dotsNav.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    })

    return {
      track, slides, dotsNav, dots, slideWidth
    }
  }

  const moveToTargetSlide = (currentSlide, targetSlide, dotIndex) => {
    const track = prepareSlider().track;
    const slides = prepareSlider().slides;
    if (targetSlide !== null){
      const amountToMove = targetSlide.style.left;
      track.style.transform = 'translateX(-' + amountToMove + ')';
      const currentDot = document.querySelector('.currentDot');

      currentSlide.classList.remove('currentSlide');
      targetSlide.classList.add('currentSlide');
      currentDot.classList.remove('currentDot');
      prepareSlider().dots[dotIndex].classList.add('currentDot');

      if(dotIndex === slides.length - 1){
        nextButton.current.style.opacity = 0;
        prevButton.current.style.opacity = 0.5;
      } else if (dotIndex === 0) {
        prevButton.current.style.opacity = 0;
        nextButton.current.style.opacity = 0.5;
      } else {
        nextButton.current.style.opacity = 0.5;
        prevButton.current.style.opacity = 0.5;
      }
    }
  }

  const prevSlide = () => {
    const currentSlide = document.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;
    const dotIndex = prepareSlider().slides.findIndex(slide => slide === prevSlide);
    moveToTargetSlide(currentSlide, prevSlide, dotIndex)
  }

  const nextSlide = () => {
    console.log(prepareSlider().slides);
    const currentSlide = document.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    const slides = prepareSlider().slides
    const dotIndex = slides.findIndex(slide => slide === nextSlide);
    moveToTargetSlide(currentSlide, nextSlide, dotIndex);
  }

  const dotToSlide = (e) => {
    const clickedDot = e.target.closest('button');
    if (clickedDot === null) return;
    const dots = prepareSlider().dots;
    const targetIndex = dots.findIndex(dot => dot === clickedDot);
    const currentSlide = document.querySelector('.currentSlide');
    const targetSlide = prepareSlider().slides[targetIndex];
    moveToTargetSlide(currentSlide, targetSlide, targetIndex);
  }

  const autoSlide = () => {
    setInterval(() => {
      const currentSlide = document.querySelector('.currentSlide');
      const slides = prepareSlider().slides;
      const slideIndex = slides.findIndex(slide => slide === currentSlide);
      var targetSlide = null;
      if(slideIndex === slides.length - 1){
        targetSlide = slides[0];
      } else {
        targetSlide = currentSlide.nextElementSibling;
      }
      const dotIndex = prepareSlider().slides.findIndex(slide => slide === targetSlide);
      moveToTargetSlide(currentSlide, targetSlide, dotIndex);
      // nextSlide();
    }, 9000);
  }
  
  
  return (
    <div className="carouselWrapper">
      <div className="carousel">

        <button className="slideButtons slideLeft" onClick={prevSlide} ref={prevButton}>
          <FaChevronLeft/>
        </button>

        <div className="trackContainer" ref={trackContainer}>
          {
            (slideImages.length !== 0) ?
              slideImages.map((slide) => (
              <Slide key={slide.image} image={slide.image} currentSlide={(slideImages.indexOf(slide) === 0 ? "currentSlide" : null)}/>
              )) :
              null
          }
        </div>
        <button className="slideButtons slideRight" onClick={nextSlide} ref={nextButton}>
          <FaChevronRight />
        </button>

        <div className="dotNav" ref={dotContainer} onClick={dotToSlide}>
          {/* <button className="dot currentDot"></button> */}
          {
            (slideImages.length !== 0) ?
              slideImages.map((slide) => (
              <button 
                className={"dot " + (slideImages.indexOf(slide) === 0 ? "currentDot" : null)} 
                key={slide.image + "dot"}
              ></button>
              )) :
              null
          }
        </div>
      </div>
    </div>
  )
}

export default Carousel
