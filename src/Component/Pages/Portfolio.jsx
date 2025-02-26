import React from 'react';
import Navbar from '../Navbar';
import HeroPortfolio from '../HeroPortfolio';
import Clients from '../Clients';
import DisplaySection from '../Display';
import DisplaySec from '../DisplaySec';
import FlexDisplay from '../FlexDisplay';
import Carousel from '../Carousel';
import Footer from '../Footer';

function Portfolio() {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <HeroPortfolio />
          <Clients/>
          <DisplaySection/>
          <FlexDisplay/>
          <DisplaySec/>

          <Carousel/>
          <Footer/>
</div>
</>
    )}



export default Portfolio;