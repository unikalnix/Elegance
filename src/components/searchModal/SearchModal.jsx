import React, { useEffect } from 'react'
import './searchModal.css'
import { X } from 'lucide-react'

const SearchModal = ({isOpen, toggleSearchModal}) => {
  return (
   <div className={`search-container ${isOpen && "active"}`}>
   <div className="search-overlay"></div>
    <div
    className='search-modal'>
      <div className="top-layer">
        <h2>Search products</h2>
        <X className='top-layer--cross-icon' onClick={toggleSearchModal}/>
      </div>
      <div className="middle-layer">
        <input type="text" placeholder='Search for products...' />
        <button>Search</button>
      </div>
      <div className="bottom-layer">
        <h2>Popular searches</h2>
        <ul className='search-boxes'>
          <li>Summer Collection</li>
          <li>Dresses</li>
          <li>Shirts</li>
          <li>Accessories</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default SearchModal
