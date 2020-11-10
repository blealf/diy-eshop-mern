import React, { useRef, useState, useEffect, useContext } from 'react';
import '../../styles/Header.scss';
import SearchBar from './SearchBar';
import Menu from './Menu';
import { BiUser } from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import {DataContext} from '../../utility/OrderProvider';


const Header = () => {
  const orderContext = useContext(DataContext);
  const [cart, setCart] = useState([]);
  const menuToggle = useRef();
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal

    setCart(orderContext.orders);

    return function cleanup() {
      abortController.abort()
    }
  }, [orderContext.orders])

  const closeMenu = () => {
    menuToggle.current.checked = false;
  }

  return (
    <div className="headerWrapper">
      <header>
        <h1 className="logo"><Link to="/">DIY ESHOP</Link></h1>

        <input ref={menuToggle} type="checkbox" className="navToggle" id="navToggle"/>
        <label htmlFor="navToggle" className="navToggleLabel">
          <span></span>
        </label>
    
        <SearchBar />

        <div className="topMenu">
          <Link to="/">
            <h3>
              <BiUser className="topMenuIcon" />
            </h3>
            <h3 className="hideOnMobile">Account</h3>
          </Link>
          <Link to="/cart/1">
            <h3>
              <FaOpencart className="topMenuIcon" />
              <span className="cartCount">{
              (cart && cart.length > 0) ? cart.length : 0
              
              }</span>
            </h3>
            <h3 className="hideOnMobile cart">Cart</h3> 
          </Link>
        </div>

        <Menu closeMenu={closeMenu}/>
      </header>

      <div className="test_nav">

      </div>
    </div>
  )
}

export default Header
