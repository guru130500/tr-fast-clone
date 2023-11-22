import React from 'react'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <div>
        <div className='portfolio-main-div'>
          <img src='https://scanfast.dk/sites/default/files/styles/lg/public/CompanyPhoto_4.webp?itok=Zdc_FLwM' height='100%' width='100%'></img>
            <div className='Portfolio-inner-div'>
                <div className='portfolio-content-div'>
                    <h5>PRODUCTS</h5>
                    <h2>A product portfolio of thousands</h2>
                    <p>Dimensional information on over 50,000 products including engineering data and downloadable 2D/3D models.</p>
                    <button>View all products</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio