import React, { useContext } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Products from './components/Product/Products';
import ProductDetails from './components/Product/ProductDetails';

function App() {
  
  return (
    <div className="App">
      <Header />
      {/* <Carousel /> */}
      <ProductDetails/>
    </div>
  );
}

export default App;
