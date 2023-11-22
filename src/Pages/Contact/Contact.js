import React from 'react'
import Details from './Details'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Globe from './Globe'
import "../Contact/Contact.css"
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='item-container' >
      <Globe/>
      <Details/>

      </div>
      <Footer/>
    </div>
  )
}

export default Contact
