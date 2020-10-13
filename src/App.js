import React, { useContext } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import Products from './components/Product/Products';
import ProductDetails from './components/Product/ProductDetails';

function App() {
  
  return (
    <div className="App">
      <Header />
      {/* <Homepage /> */}
      <ProductDetails/>
      <Footer />
    </div>
  );
}

export default App;
