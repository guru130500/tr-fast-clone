import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Company.css'
import './Purpose'
import Purpose from './Purpose'
import Quick from './Quick'
import CompanySlider from './CompanySlider'
import Footer from  '../../Components/Footer/Footer'
const Company = () => {
  return (
    <div>
        <Navbar/>
        <div className='company-div'>
            <img src='https://trfastenings.blob.core.windows.net/sitecontent/041f6a524b924a70bcd61911dc0ed047.jpg'></img>
            <div className='company-inner-div'>
                 <div>
                    <h4>ABOUT US</h4>
                    <h1>Our Company</h1>
                    <p>To enable innovation today for a better tomorrow.</p>
                 </div>
            </div>
        </div>

        <div className='company-div2'>
            <p>
            TR Fastenings (TR) is part of Trifast plc and is an international specialist in the design, engineering, manufacture and distribution of industrial fastenings and Category 'C' components principally to major global assembly industries
            </p>c
        </div>
        <Purpose/>
        <CompanySlider/>
        <Quick/>
        <Footer/>
    </div>
  )
}

export default Company