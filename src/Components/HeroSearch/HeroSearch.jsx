import React from 'react'
import searchIcon from '../../images/search.svg'

const HeroSearch = () => {
  return (
    <div className='hero-cont'>
      <div className='hero-search'>
        <div className='search-box-cont'>
          <input
            className='search-box'
            type='text'
            placeholder='Search for Events'
          />
          <button className='search-btn'>
            <img src={searchIcon} alt='' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSearch
