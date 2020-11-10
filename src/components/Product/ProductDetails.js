import React, { useState, useEffect } from 'react';
import useAxios from '../../utility/useAxios';
import '../../styles/ProductDetails.scss';
import ProductCarousel from '../Carousel/ProductCarousel';
import StarRating from './StarRating';
import { useParams, useLocation, useHistory } from 'react-router-dom';
// import ReactLoading from 'react-loading';
import axios from 'axios';

/* eslint-disable */
const ProductDetails = () => {
  
  const { id } = useParams();
  const url = "http://localhost:3001/api/products/" + id;
  const orderUrl = "http://localhost:3001/api/orders/";
  const { data, loading, error } = useAxios(url, "get");
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [signal, setSignal] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    setSignal(abortController.signal);
    setProduct(data);
    
    return(() => {
      abortController.abort();
    })
  }, [data])

  const updateQuantity = (e) => {
    setQuantity(e.target.value)
  }

  
  const addToCart = (productId, signal) => {
      axios.post(orderUrl, {
        product: productId,
        user: "5f74aaf5ca2d09428da3189e",
        quantity
      }, {signal: signal})
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  if(loading) return(<div>Loading... Product {id}</div>)
  if(error) return(<pre>{JSON.stringify(error, null, 2)}</pre>)

  return (
    <div className="pDetailsWrapper">
      {/* {console.log(props.match.params.id)} */}
      {/* {console.log(id)} */}
      {/* {console.log(data)}
      {console.log(id)} */}
      {console.log(quantity)}
      {(product) ? (
        <div>
          <div className="pDetailsHeader">
            <div className="pDetailsBreadCrumbs">
              Homepage &gt; Products &gt; {product.id}
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
            {
              (product.discount) ? 
              (<div className="saleSave">SAVE ${Math.round((product.discount / 100) * product.price)}</div>) :
              (null)
            }
            {

              (product.discount) ? 
              (<div className="price">${(product.price - (product.discount / 100) * product.price).toFixed(2).toString()
                .split('.')[0]}<span>
                 {(product.price - (product.discount / 100) * product.price).toFixed(2).toString()
                .split('.')[1]} 
                  </span> </div>):
              (<div className="price">${
                (product.price).toFixed(2).toString().split('.')[0]                
              } <span> {(product.price).toFixed(2).toString()
                .split('.')[1]}</span> </div>)
                
            }
              <div className="saleEnd">
                SALE ends: {product.saleExpiry}
                {/* October 14, 2020 */}
              </div>
              <div className="cartAndWish">
                <span className="itemQuantity"> 
                <label htmlFor="quantity">Quantity:</label> 
                  <select 
                    name="quantity" 
                    id="quantity" 
                    onChange={updateQuantity}
                  >
                    {
                      [1,2,3,4,5,6,7,8,9,10].map(value => 
                        <option 
                          key={value}
                          value={value}
                        >
                          {value}
                        </option>
                      )
                    }
                  </select>
                </span>
                <a href="/cart/user" onClick={() => addToCart(product.id, signal)}><div>Add To Cart</div></a>
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
              <p>{product.description}</p>
            </div>
            <div className="pDetailsInfo">
              <h2>More Information</h2>
              <ul>
                {
                  product.highlights.map(highlight => (<li key={highlight}>{highlight}</li>))
                }
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

      ) : null}
    </div>
  )
}

export default ProductDetails
