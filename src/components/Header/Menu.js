import React from 'react'
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';
import {NavLink} from 'react-router-dom';
import '../../styles/Header.scss';

const Menu = ({ closeMenu }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Shop
            <h3><RiArrowDropDownLine/></h3>
            <h3><RiArrowDropRightLine/></h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Brands
            <h3><RiArrowDropDownLine/></h3>
            <h3><RiArrowDropRightLine/></h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Deals
            <h3><RiArrowDropDownLine/></h3>
            <h3><RiArrowDropRightLine/></h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Services
            <h3><RiArrowDropRightLine/></h3>
          </NavLink>
        </li>
      </ul>
      <div onClick={closeMenu}></div>
    </nav>
  )
}

export default Menu
