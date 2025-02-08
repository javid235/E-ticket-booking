import React, { useContext, useState } from 'react'
import { EventContext } from '../../Context/EventContext'
import { EventCard } from '../EventCard/EventCard'

const TopEvents = () => {
    const {events} = useContext(EventContext)
  return (
    <div className='topEvent-cont'>
      <div className='topEvent'>
        <h1>Events</h1>
        <div className='topEvent-grid'>
          {events.map((item, i) => {
            return <EventCard
              key={i}
              id={item.id}
              category={item.category}
              name={item.name}
              date={item.date}
              venue={item.venue}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          })} 
        </div>
      </div>
    </div>
  )
}

export default TopEvents
