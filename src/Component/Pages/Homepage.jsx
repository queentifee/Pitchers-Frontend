import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import FeatureSec from '../FeatureSec';
import WorkFlow from '../WorkFlow';
import Pricing from '../Pricing';
import Testimonials from '../Testimonials';
import ContactForm from '../Form';
import Pictures from '../Pictures';
import Footer from '../Footer';


function HomePage() {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSec />
          <WorkFlow />
          {/* <Pricing /> */}
          <Testimonials />
          <Pictures />
        </div>
        <div className="bg-gradient-to-r from-green-800/40 via-black via-80% to-green-800/40 max-w-7xl mx-auto pt-10 px-6 mt-20">

<ContactForm/>
<Footer/>

</div>
      </>
    );
  }
  
  export default HomePage;