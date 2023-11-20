import React from 'react'
import './Investor.css'
import Navbar from '../../Components/Navbar/Navbar'
import Our from './Our'
import Opportunity from './Opportunity'
import Tool from './Tool'
import Footer from '../../Components/Footer/Footer'
const Investor = () => {
  return (
    <div>
        <Navbar/>
        <div className='Investor-first-div'>
            <img src='https://trfastenings.blob.core.windows.net/sitecontent/b348f7f1dfda4f8c953e7b5f3eda26e3.jpg'></img>
            <div className='Investor-inner-div'>
                 <div>
                    <img src='https://trfastenings.blob.core.windows.net/sitecontent/ecd48724bbaa485fbdd4d46191700ca7.png'></img>
                    <h1>Investors</h1>
                 </div>
            </div>
        </div>
        <div className='Investor-div2'>
            <p>
            Welcome to our investor section where you will find information and digital tools including share and dividend information, share price analysis, latest news and corporate reporting
            </p>
        </div>
        <Our/>
        <Opportunity/>
        <Tool/>
        <Footer/>
    </div>
  )
}

export default Investor