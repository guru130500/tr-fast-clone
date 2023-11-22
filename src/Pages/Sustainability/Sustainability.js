import React from 'react';
import './Sustainability.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Environment from './Environment';
import Quick from './Quick';
import Securing from './Securing';
import Governance from './Governance';
import People from './People';

const Sustainability = () => {
  return (
    <div>
      <Navbar/>
      <Environment/>
      <Governance/>
      <People/>
      <Securing/>
      <Quick/>
      <Footer/>
    </div>
  )
}

export default Sustainability
