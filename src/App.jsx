import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Component/Pages/Homepage';
import LoginPage from './Component/Pages/Login';
import CreateAccountPage from './Component/Pages/CreateAccountPage';
import Portfolio from './Component/Pages/Portfolio';
import ProjectPreview from './Component/ProjectPreview';
import AboutUs from './Component/Pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/preview/:id" element={<ProjectPreview />} />
        <Route path="/about" element={<AboutUs />} />



      </Routes>
    </Router>
  );
}
export default App;