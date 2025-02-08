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
      <ScrollToTop routesToScroll={['/details', '/contact', '/events']} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:id' element={<EventDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
