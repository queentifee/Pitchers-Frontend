import React from 'react';
import Navbar from '../Navbar';
import HeroAboutUs from '../HeroAboutUs';
import WhoWeAre from '../WhoWeAre';
import LogoSection from '../LogoSection';
import Mission from '../Mission';
import Footer from '../Footer';
import FeatureAbout from '../FeatureAbout';
import ChooseUs from '../ChooseUs';
import ContactForm from '../Form';
import Pictures from '../Pictures';


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
          <Pictures/>
          </div>
          <div className="bg-gradient-to-r from-green-800/40 via-black via-80% to-green-800/40 max-w-7xl mx-auto pt-10 px-6 mt-20">

          <ContactForm/>
         <Footer/>

</div>
</>
          )}

export default AboutUs