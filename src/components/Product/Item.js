import React from 'react';
import '../../styles/Products.scss'

const Item = ({
  title,
  review
}) => {
  return (
    <div className="itemWrapper">
      <div className="itemHeader">
        <div className="itemBreadCrumbs"></div>
        <div className="itemMetaData">
          <div className="itemTitle">
            {title}
          </div>
          <div className="itemPoints">
            {/* {review.rating} */}
          </div>
        </div>
      </div>
      <div className="itemMain">
        <div className="itemPicture">

        </div>
        <div className="itemHighlights"></div>
      </div>
      <div className="itemDescription">
        <div className="itemOverview"></div>
        <div className="itemInfo"></div>
      </div>
    </div>
  )
}

export default Item
