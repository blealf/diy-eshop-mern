import React from 'react';
import '../../styles/Header.scss'
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form action="" className="searchForm">
          <input type="text"/>
          <button><BiSearchAlt className="search"/></button>
      </form>
    </div>
  )
}

export default SearchBar
