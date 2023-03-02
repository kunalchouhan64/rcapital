import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Popoup from './Components/Popoup'
import Enquiry from './Pages/Enquiry'
import Home from './Pages/Home'
import Services from './Pages/Services'
import ReactGA from 'react-ga';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-VD4134VKR0');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/pop' element={<Popoup />} /> */}
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/services' element={<Services />} />

      </Routes>
    </>
  )
}

export default App