import React from 'react';
import './Landing.css';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Industry from './Industry';
import Portfolio from './Portfolio';
import Investor from './Investor';
import Service from './Service';
import Latest from './Latest';
const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Portfolio/>
      <Industry/>
      <Investor/>
      <Service/>
      <Latest/>
      <Footer/>
      
    </div>
  )
}

export default Landing
