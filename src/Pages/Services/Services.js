import React from 'react';
import './Services.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Service from './Service';
import Blending from './Blending';
import Produce from './Produce';
import Deliver from './Deliver';
import Design from './Design';
import Source from './Source';
import Standards from './Standards';
import Collaboration from './Collaboration';

const Services = () => {
  return (
    <div className='Industries-Body'>
      <Navbar/>
      <Service/>
      <Blending/>
      <Produce/>
      <Deliver/>
      <Design/>
      <Source/>
      <Standards/>
      <Collaboration/>
      <Footer/>
    </div>
  )
}

export default Services
