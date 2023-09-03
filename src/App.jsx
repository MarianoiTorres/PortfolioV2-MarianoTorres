import './App.css'
import Intro from './components/intro/Intro'
import LandingPage from './pages/landingPage/landingPage'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Intro />}/>
          <Route path='/landing' element={<LandingPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
