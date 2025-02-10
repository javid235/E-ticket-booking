import React, { useContext, useState } from 'react'
import './EventDetail.css'
import { useParams } from 'react-router-dom'
import { EventContext } from '../../Context/EventContext'

const EventDetail = () => {
  const { events } = useContext(EventContext)
  const { id } = useParams()
  const event = events.find((e) => e.id === Number(id))
  return (
    <div className='eve-detail-cont'>
      <div className='eve-detail'>
        <h1 className='eve-title'>{event.name}</h1>

        {/* Image Slider */}
        <div className='eve-image-slider'>
          <img src={event.image} alt='Comic-Con Event' />
          <div className='eve-slider-controls'>
            <button className='eve-prev'>◀</button>
            <button className='eve-next'>▶</button>
          </div>
        </div>

        <div className='eve-content'>
          {/* About Section */}
          <div className='eve-about'>
            <h2>About {event.name}</h2>
            <p>{event.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aliquid perferendis modi accusamus provident. Nemo, rem autem a vitae quae culpa architecto officiis ratione possimus? Illo corporis ullam culpa saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, temporibus. Ullam ea iure assumenda quisquam quaerat modi molestiae itaque exercitationem possimus, consectetur nulla amet nam asperiores voluptatum, harum enim soluta!</p>
            <h3>Highlights:</h3>
            <ul>
              <li>🎬 Movie & TV Show Premieres</li>
              <li>🌟 Meet Special Guests</li>
              <li>🎭 Cosplay Parade</li>
              <li>🎮 Gaming & Interactive Workshops</li>
            </ul>
            <p>
              <strong>Tickets:</strong> Starting at ${event.price}
            </p>
            <p>
              <strong>Venue:</strong> {event.venue}
            </p>
            <p>
              <strong>Dates:</strong> {event.date}
            </p>
          </div>

          {/* Booking Section */}
          <div className='eve-booking'>
            <div className='eve-date-location'>
              <span className='eve-date'>📅 {event.date}</span>
              <span className='eve-location'>📍 {event.venue}</span>
            </div>
            <div className='eve-seats'>
              <span>Seats Available</span>
              <strong>50 / 100</strong>
            </div>
            <p className='eve-price'>
              ${event.price} <span>/ person</span>
            </p>
            <button className='eve-book-now'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
