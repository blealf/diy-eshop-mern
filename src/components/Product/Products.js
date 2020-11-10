import React, { useState, useEffect, useContext } from 'react';
import '../../styles/Products.scss';
import {DataContext} from '../../utility/ProductProvider';
import ProductCarousel from '../Carousel/ProductCarousel';
import Item from './Item';


const Products = () => {
  // const url = 'http://localhost:3001/api/products';
  const someData = useContext(DataContext);
  // const { data, loading, error } = useAxios(url);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    setProducts(someData.products)
  }, [someData]);

  return (
    <div className="productWrapper">
      {(products.length > 0) ? products.map(item => (
        <Item 
          key={item.id}
          product={item} 
          />
      )) : null
    }
      
    </div>
  )
}

export default Products
