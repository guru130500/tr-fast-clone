import React from 'react'
import './Latest.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Latest = () => {
  return (
    <div>
        <div className='latest-main-div'>
              <div className='latest-div1'>
              <h4>Latest news</h4>
                   <p>Keep up to date with the latest fastener, industry and Company news from TR and our Group of companies.git</p>
            
              </div>
              <div className='latest-div2'>
                                 
                <div>
                    <h4>TR working with LEVC</h4>
                    <p>TR Fastenings provides time-critical solution to The London EV Company</p>
                    <button>Read article</button>
                    
                </div>
                <div>

                    <h4>Advanced Engineering UK</h4>
                    <p>TR to exhibit at Advanced Engineering UK 1-2 Nov</p>
                    <button>Read article</button>
                </div>
                <div>
                   <h4>TR Fastenings association with NEAA</h4>
                    <p>Why the association with the NEAA is important to TR Fastenings</p>
                    <button>Read article</button>
                </div>
                <div>

                    <h4>TR VIC renowned manufacturer</h4>
                    <p>TR VIC - a renowned manufacturer</p>
                    <button>Read article</button>
                </div>



              </div>
           
        </div>
    </div>
  )
}

export default Latest