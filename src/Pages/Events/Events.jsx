import React, { useContext, useState } from 'react'
import './Events.css'
import { EventContext } from '../../Context/EventContext'
import { EventCard } from '../../Components/EventCard/EventCard'

const Events = () => {
  const { events } = useContext(EventContext)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category === selectedCategory ? 'all' : category)
  }

  const categories = [
    'Concerts',
    'Theater Shows',
    'Stand-up Comedy',
    'Sports',
    'Workshops',
    'Festivals',
    'Exhibitions',
    'Conferences',
    'Parties/Nightlife',
    'Kids & Family Events',
  ]

  // Filter events based on selected category
  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter((item) => item.category === selectedCategory)

  return (
    <>
      <div className='events-cont'>
        <div className='events'>
          <div className='filters'>
            <h2 className='filter-title'>Filters</h2>
            <hr />
            <form action='' className='cat-form-cont'>
              <h3>Categories</h3>
              <div className='cat-form'>
                {categories.map((cat) => (
                  <div key={cat} className='input-check'>
                    <input
                      type='checkbox'
                      checked={selectedCategory === cat}
                      onChange={() => handleCheckboxChange(cat)}
                    />
                    <label>{cat}</label>
                  </div>
                ))}
              </div>
            </form>
          </div>
          <div className='events-grid'>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((item, i) => (
                <EventCard
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
              ))
            ) : (
              <p>No events found</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
