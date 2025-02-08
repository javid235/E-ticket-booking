import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Events from './Pages/Events/Events'
import Contact from './Pages/Contact/Contact'
import EventDetail from './Pages/EventDetail/EventDetail'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop
        routesToScroll={[
          '/bookit/details',
          '/bookit/contact',
          '/bookit/events',
        ]}
      />
      <Navbar />
      <Routes>
        <Route path='/bookit/' element={<Home />} />
        <Route path='/bookit/events' element={<Events />} />
        <Route path='/bookit/contact' element={<Contact />} />
        <Route path='/bookit/details/:id' element={<EventDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
