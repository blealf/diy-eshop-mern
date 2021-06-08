import React, { useState, useEffect, useContext } from 'react';
import '../../styles/Homepage.scss'
import {FiTruck} from 'react-icons/fi';
import {BiDollarCircle} from 'react-icons/bi';
import {FaBoxOpen} from 'react-icons/fa';
import Carousel from '../Carousel/Carousel';
import StarRating from '../Product/StarRating';
import {DataContext} from '../../utility/ProductProvider';
import {Link} from 'react-router-dom';
import Loading from '../../utility/Loading';

const HomePage = () => {

  const productContext = useContext(DataContext);
  const [products, setProducts] = useState([]);

useEffect(() => {
    setProducts(productContext ? productContext.products: [])

    return(() => {
      setProducts([]);
    })
  }, (productContext ? [productContext]: []))

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
        {/* {console.log(products)} */}
      </div>

      <div className="homepageDeals">
        <div className="dealsTitle">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
        <div className="dealWrapper">
          {
            (products && products.length > 0) ? (
              (products.map(product => (
                <Link to={`/products/` + product.id} key={product.id}>
                  <div className="dealItem">
                    {/* {navigate('/other-page', { state: { id: product.id } })} */}
                    <div className="dealImage">
                      <img src="/images/pic1.jpg" alt=""/>
                    </div>
                    <div className="dealInfo">
                      <div className="dealTitle">
                        {product.title}
                      </div>
                      <div className="dealReview">
                        <StarRating rating={4.2} /> <span>(3562 Reviews)</span>
                      </div>
                      <div className="dealPrice">
                        {
                        (product.discount) ? 
                        (<h2>${(product.price - (product.discount / 100) * product.price).toFixed(2)} <span>SAVE ${Math.round((product.discount / 100) * product.price)}</span></h2>) :
                        (<h2>${(product.disount / 100) * product.price}.99 </h2>)
                        }
                      </div>
                    </div>
                  </div>
                </Link>
              )))
            ) : <Loading type="cylon" color="teal" data="Products"/>
          }
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
