import React from 'react';
import './App.scss';
import Error from './utility/Error';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import Products from './components/Product/Products';
import ProductDetails from './components/Product/ProductDetails';
import Cart from './components/Cart/Cart';
import { Switch, Route } from 'react-router-dom';
import { ProductProvider} from './utility/ProductProvider';
import { OrderProvider } from './utility/OrderProvider';


import NewProductForm from './components/Product/NewProductForm'

function App() {
  
  return (
    <div className="App">
      <ProductProvider>
        <OrderProvider>
          <Header />
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/products/new' component={NewProductForm}/>
            <Route path='/products/:id' component={ProductDetails}/>
            <Route path='/cart/:id' component={Cart}/>
            <Route component={Error} />
          </Switch>
          <Footer />
        </OrderProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
