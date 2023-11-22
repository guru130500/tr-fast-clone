import React from 'react';
import './Landing.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Industry from './Industry';
import Portfolio from './Portfolio';
import Investor from './Investor';
import Service from './Service';
import Latest from './Latest';
import Crousel from './Carorsel';
import Knowledge from './Knowledge';


const Landing = () => {
  return (
    <div>
      <Navbar/>
      <div className='anouncement'>
        <div className='anouncementImg'>
          <img src='https://trfastenings.blob.core.windows.net/sitecontent/2eb3dd03ae5b409db49f173cbfdd4b98.png'/>
        </div>
        <div>
          <p>
            <b>
              Important update regarding Russian Iron and Steel products
            </b>
          </p>
        </div>
      </div>
      {/* <div>
        <Crousel/>
      </div>
      <Portfolio/>
      <Industry/>
      <Investor/>
      <Knowledge/>
      <Service/>
      <Latest/>
      <Footer/>       */}
    </div>
  )
}

export default Landing
