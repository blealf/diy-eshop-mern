import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  // const testRating = 4.5;

  const giveStarRating = () => {
    if (!rating) return
    const expandRating = Math.round(rating * 2);
    // console.log(expandRating);
    const starRating =[]
    for(let i = 1; i < 11; i++){
      if(i%2 === 0 && expandRating >= i){
        starRating.push(<span key={i}><FaStar/></span>)
      } else if(expandRating === i && i%2 !== 0) {
        starRating.push(<span key={i}><FaStarHalfAlt/></span>)
        i = i+1;
      } else if(i%2 === 0) {
        starRating.push(<span key={i}><FaRegStar/></span>)
      }
    }
    return starRating;
  }
  return (
    <div className="starRating">
      {
        giveStarRating().map(star => star)
      }
    </div>
  )
}

export default StarRating
