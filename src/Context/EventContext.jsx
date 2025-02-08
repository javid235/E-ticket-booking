import React, { createContext } from 'react'
import events from './events'

export const EventContext = createContext(null)

const EventContextProvider = (props) => {
  const contextValue = {
    events,
  }

  return (
    <EventContext.Provider value={contextValue}>
      {props.children}
    </EventContext.Provider>
  )
}

export default EventContextProvider
