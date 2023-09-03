import './App.css'
import Intro from './components/intro/Intro'
import Nav from './components/navBar/Nav'
import HomePage from './pages/homePage/HomePage'
import LandingPage from './pages/landingPage/landingPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Intro />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
