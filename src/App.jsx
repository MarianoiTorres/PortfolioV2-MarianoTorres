import './App.css'
import Intro from './components/intro/Intro'
import Nav from './components/navBar/Nav'
import HomePage from './pages/homePage/HomePage'
import LandingPage from './pages/landingPage/LandingPage'
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
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
