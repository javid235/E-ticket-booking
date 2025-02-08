import React, { useState } from 'react'
import image1 from '../../images/212.jpg'
import calenderIcon from '../../images/calender.svg'
import locationIcon from '../../images/location.svg'
import heart from '../../images/heart.svg'
import heart2 from '../../images/heart2.svg'
import { Link } from 'react-router-dom'

export const EventCard = (props) => {
  const [onAddToFav, setOnAddToFav] = useState(false)
  const onClickAddToFav = () => setOnAddToFav((prevState) => !prevState)
  return (
    <div className='event-card'>
      <div>
        <img className='event-card-image' src={props.image} alt='' />
        <div className='event-cart-bottom'>
          <div className='event-card-info'>
            <div>
              <p className='event-title'>{props.name}</p>
              <div className='event-info'>
                <img src={calenderIcon} alt='' />
                <p>{props.date}</p>
              </div>
              <div className='event-info'>
                <img src={locationIcon} alt='' />
                <p>Venue: {props.venue}</p>
              </div>
            </div>
            <div onClick={onClickAddToFav}>
              <div className='whiselist-btn'>
                <img
                  className='heart'
                  src={onAddToFav ? heart : heart2}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='event-price-book'>
        <p className='event-price'>${props.price} / person</p>
        <div className='detailss-book'>
          <Link to={`/details/${props.id}`}>
            <button className='see-details'>See details</button>
          </Link>
          <button className='book-now'>Book Now</button>
        </div>
      </div>
    </div>
  )
}
