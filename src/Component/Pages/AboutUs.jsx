import React from 'react';
import Navbar from '../Navbar';
import HeroAboutUs from '../HeroAboutUs';
import WhoWeAre from '../WhoWeAre';
import LogoSection from '../LogoSection';
import Mission from '../Mission';
import Footer from '../Footer';
import FeatureAbout from '../FeatureAbout';
import ChooseUs from '../ChooseUs';


function AboutUs() {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <HeroAboutUs />
          <WhoWeAre/>
          <LogoSection/>
          <Mission/>
          <FeatureAbout/>
          <ChooseUs/>
         <Footer/>


          </div>
</>
          )}

export default AboutUs