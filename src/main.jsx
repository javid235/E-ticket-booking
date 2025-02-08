
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EventContextProvider from './Context/EventContext.jsx'

createRoot(document.getElementById('root')).render(
    <EventContextProvider>
        <App />
    </EventContextProvider>
    
)
