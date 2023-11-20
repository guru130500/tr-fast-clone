import React from 'react'
import './Opportunity.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Opportunity = () => {
  return (
    <div>
         <div className='Opportunity-main-div'>
                                 
                                 <div>
                                     <h4>OPPORTUNITY</h4>
                                     <p>What sets us apart</p>
                                     <button>Find out more</button>
                                     <article><ArrowOutwardIcon style={{color:'#0099cc'}}/></article>
                                 </div>
                                 <div>
                 
                                     <h4>INVESTOR PORTAL</h4>
                                     <p>Shareholder information</p>
                                     <button>Find out more</button>
                                     <article><ArrowOutwardIcon style={{color:'rgb(111, 36, 111)'}}/></article>
                                 </div>
                                 <div>
                                    <h4>ACCOUNTABILITY</h4>
                                     <p>Governance</p>
                                     <button>Find out more</button>
                                     <article><ArrowOutwardIcon style={{color:'#339933'}}/></article>
                                 </div>
                                 <div>
                 
                                     <h4>DELIVERING RETURNS</h4>
                                     <p>Financial informationr</p>
                                     <button>Find out more</button>
                                     <article><ArrowOutwardIcon style={{color:'#686864'}}/></article>
                                 </div>

                                 <div>
                 
                 <h4>LATEST NEWS</h4>
                 <p>Regulatory news service (RNS)</p>
                 <button>Find out more</button>
                 <article><ArrowOutwardIcon style={{color:'#38a2dc'}}/></article>
             </div>
                 

                             <div>
                                 
                                 <h4>RESEARCH AND ANALYSIS</h4>
                                 <p>Equity research</p>
                                 <button>Find out more</button>
                                 <article><ArrowOutwardIcon style={{color:'#f49303'}}/></article>
                             </div>
                 
                             <div>
                 
                                   <h4>ANALYSIS</h4>
                                   <p>Share data</p>
                                   <button>Find out more</button>
                                   <article><ArrowOutwardIcon style={{color:'#2eb8b8'}}/></article>
                               </div>

                               <div>
                 
                              <h4>DOWNLOADS</h4>
                              <p>Reports and presentations</p>
                              <button>Find out more</button>
                              <article><ArrowOutwardIcon style={{color:'#004080'}}/></article>
                                </div>
                               </div>
                            
    </div>
  )
}

export default Opportunity