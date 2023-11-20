import React from 'react';
import './Industries.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Supply from './Supply';
import Industry from './Industry';
import Blending from './Blending';
import Content from './Content';

const Industries = () => {
  return (
    <div className='Industries-Body'>
      <Navbar/>
      <Industry/>
      <Blending/>
      <Content/>
      <Supply/>
      <Footer/>
    </div>
  )
}

export default Industries
