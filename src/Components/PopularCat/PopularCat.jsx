import React from 'react'
import concertIcon from '../../images/mic.png'
import comedyIcon from '../../images/comedy.png'
import foodIcon from '../../images/hotel.png'
import sportIcon from '../../images/sport.png'
import movieIcon from '../../images/movies.png'
import './PopularCat.css'

export const PopularCat = () => {
  return (
    <div className='popularCat-cont'>
      <div className='popularCat'>
        <h1>Popular Categories</h1>
        <div className='popularCat-grid'>
          <div>
            <img src={concertIcon} alt='' />
            <p>Concerts</p>
          </div>
          <div>
            <img src={comedyIcon} alt='' />
            <p>Stand-up Comedy</p>
          </div>
          <div>
            <img src={foodIcon} alt='' />
            <p>Food Events</p>
          </div>
          <div>
            <img src={sportIcon} alt='' />
            <p>Sports Events</p>
          </div>
          <div>
            <img src={movieIcon} alt='' />
            <p>Movies</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PopularCat