import React from 'react'
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';

const Menu = ({ closeMenu }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="">
            Shop
            <h3><RiArrowDropDownLine/></h3>
            <h3><RiArrowDropRightLine/></h3>
          </a>
        </li>
        <li>
          <a href="">
            Brands
            <h3><RiArrowDropDownLine/></h3>
            <h3><RiArrowDropRightLine/></h3>
          </a>
        </li>
        <li>
          <a href="">
            Deals
            <h3><RiArrowDropDownLine/></h3>
            <h3><RiArrowDropRightLine/></h3>
          </a>
        </li>
        <li>
          <a href="">
            Services
            <h3><RiArrowDropRightLine/></h3>
          </a>
        </li>
      </ul>
      <div onClick={closeMenu}></div>
    </nav>
  )
}

export default Menu
