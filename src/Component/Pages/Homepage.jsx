import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import FeatureSec from '../FeatureSec';
import WorkFlow from '../WorkFlow';
import Pricing from '../Pricing';
import Testimonials from '../Testimonials';
import Footer from '../Footer';


function HomePage() {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSec />
          <WorkFlow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </>
    );
  }
  
  export default HomePage;