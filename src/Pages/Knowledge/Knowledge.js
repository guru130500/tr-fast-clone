import React from 'react';
import './Knowledge.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Blending from './Blending';
import Accordion from './Accordion';

const Knowledge = () => {
  return (
    <div className='Industries-Body'>
      <Navbar/>
      <Blending/>
      <div className='Knowledge-Accordion-Div'>
        <center>
          <h1>
            Get Started:
          </h1>
          <div>
            <Accordion/>
          </div>
        </center>
      </div>
      <Footer/>
    </div>
  )
}

export default Knowledge
