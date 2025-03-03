import React from 'react';
import Navbar from '../Navbar';
import HeroPortfolio from '../HeroPortfolio';
import Clients from '../Clients';
import DisplaySection from '../Display';
import DisplaySec from '../DisplaySec';
import FlexDisplay from '../FlexDisplay';
import Carousel from '../Carousel';
import Footer from '../Footer';
import Pictures from '../Pictures';
import ContactForm from '../Form';

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
          <Pictures/>
</div>
<div className="bg-gradient-to-r from-green-800/40 via-black via-80% to-green-800/40 max-w-7xl mx-auto pt-10 px-6 mt-20">

<ContactForm/>
<Footer/>

</div>
</>
    )}



export default Portfolio;