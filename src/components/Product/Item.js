import React from 'react';
import '../../styles/Products.scss'
import {Link} from 'react-router-dom';

const Item = ({
  product
}) => {
  return (
    <div className="itemWrapper">
      <div className="itemHeader">
        <div className="itemBreadCrumbs"></div>
        <div className="itemMetaData">
          <div className="itemTitle">
            <Link to={'/products/' + product.id }>
            {/* {product.title} */}
            {product.title.charAt(0).toUpperCase() + product.title.slice(1,)}
            </Link>
          </div>
          <div className="itemPoints">
            {/* {review.rating} */}
            {/* {console.log(product)} */}
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
