import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeatureSec from './Component/FeatureSec'
import Navbar from './Component/Navbar'
import HeroSection from './Component/HeroSection'
import WorkFlow from './Component/WorkFlow'
import Pricing from './Component/Pricing'
import Testimonials from './Component/Testimonials'
import Footer from './Component/Footer'
// import LoginPage from './pages/Login.jsx'

const App = () => {
  return (
      <>
      <Navbar/>
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeatureSec/>
        <WorkFlow/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
        </div>
        <Router>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/create-account" element={<CreateAccountPage />} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
    </>
    
  )
}

export default App;