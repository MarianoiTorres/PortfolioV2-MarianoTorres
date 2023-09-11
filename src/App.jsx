import './App.css'
import Intro from './components/intro/Intro'
import Nav from './components/navBar/Nav'
import Particle2 from './components/particle/Particle2'
import HomePage from './pages/homePage/HomePage'
import LandingPage2 from './pages/landingPage2/LandingPage2'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()

  return (
    <>
      {
        location.pathname === '/home' && <Nav />
      }
      <Routes>
        <Route path='' element={<Intro />} />
        <Route path='/landing' element={<><LandingPage2 /><Particle2 /></>} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
