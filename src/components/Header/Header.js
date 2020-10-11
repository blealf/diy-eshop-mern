import React, { useRef } from 'react';
import '../../styles/Header.scss';
import SearchBar from './SearchBar';
import Menu from './Menu';
import { BiUser } from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';


const Header = () => {
  const menuToggle = useRef();

  const closeMenu = () => {
    menuToggle.current.checked = false;
  }

  return (
    <div className="headerWrapper">
      <header>
        <h1 className="logo"><a href="#">DIY ESHOP</a></h1>

        <input ref={menuToggle} type="checkbox" className="navToggle" id="navToggle"/>
        <label htmlFor="navToggle" className="navToggleLabel">
          <span></span>
        </label>
    
        <SearchBar />

        <div className="topMenu">
          <a href="#">
            <h3>
              <BiUser className="topMenuIcon" />
            </h3>
            <h3 className="hideOnMobile">Account</h3>
          </a>
          <a href="#">
            <h3>
              <FaOpencart className="topMenuIcon" />
              <span className="cartCount">10</span>
            </h3>
            <h3 className="hideOnMobile cart">Cart</h3> 
          </a>
        </div>

        <Menu closeMenu={closeMenu}/>
      </header>

      <div className="test_nav">

      </div>
    </div>
  )
}

export default Header
