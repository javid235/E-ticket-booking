import React, { useContext } from 'react'
import { EventContext } from '../../Context/EventContext'
import { EventCard } from '../EventCard/EventCard'

const TopEvents = () => {
  const { events } = useContext(EventContext)

  // Filter one event from each category
  const sportsEvent = events.find((event) => event.category === 'Sports')
  const concertEvent = events.find((event) => event.category === 'Concerts')
  const festivalEvent = events.find((event) => event.category === 'Festivals')

  // Combine the selected events into an array
  const topEvents = [sportsEvent, concertEvent, festivalEvent].filter(
    (event) => event
  )

  return (
    <div className='topEvent-cont'>
      <div className='topEvent'>
        <h1>Top Events</h1>
        <div className='topEvent-grid'>
          {topEvents.map((event, i) => (
            <EventCard
              key={i}
              id={event.id}
              category={event.category}
              name={event.name}
              date={event.date}
              venue={event.venue}
              image={event.image}
              price={event.price}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopEvents
