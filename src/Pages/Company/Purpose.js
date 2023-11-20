import React from 'react'
import './Purpose.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Purpose = () => {
  return (
    <div>
        <div className='purpose-main-div' >
               <div className='purpose-left-div'>
                    <div>
                        <h3>PURPOSE STATEMENT</h3>
                        <h2>Our purpose</h2>
                        <p>To provide Trusted Reliability at every turn to our customers, suppliers and our people, empowering them to deliver sustainable products and solutions that add value to society and our planet.</p>
                        <article><ArrowOutwardIcon style={{color:'#0099cc'}}/></article>
                    </div>
                    <div>
                       <h3>VISION</h3>
                       <h2>Securing a sustainable future</h2>
                       <p>Supporting a sustainable economy using our technical expertise to empower customers, suppliers and our people to innovate solutions that will improve the environment and people’s lives.</p>
                       <article><ArrowOutwardIcon  style={{color:'#f49303'}}/></article>
                    </div>
                    <div>
                      <h3>STRATEGY</h3>
                       <h2>Our strategy</h2>
                       <p>TR operates in a fragmented market. Our established customer relationships and access to high growth emerging markets support strong organic and acquisitive growth for the future.</p>
                        <ul>
                            <li>A global leader in attractive markets</li>
                            <li>Focus on growth</li>
                            <li>Capital allocation framework</li>
                            <li>Focus on sustainability</li>
                        </ul>   

                         <button>Read more</button>
                         <article><ArrowOutwardIcon style={{color:'rgb(117, 2, 117)'}} /></article>
                    </div>
                    <div>
                       <h3>CODE OF CONDUCT</h3>
                       <h2>Code of business conduct</h2>
                       <p>At Trifast we have a continuing commitment to conduct our business operations in a fair and ethical manner and to comply with all relevant laws and regulations, within all of our operating locations around the globe.</p>
                      
                        <button>Read more</button>
                        <article><ArrowOutwardIcon  style={{color:'#2eb8b8'}} /></article>
                    </div>
               </div>
               <div className='purpose-right-div'>
                   <h3>MISSION</h3>
                   <h2>Our mission</h2>
                   <p>To promote an environment that is safe and fair, which motivates, develops and maximises the contribution and potential of all employees.</p>
                   <p>To be acknowledged commercially as the market leader in industrial fastenings in terms of service, quality, design, engineering, support, ESG (environmental, social and governance), together with brand reputation.</p>
                   <p>To continue to grow profitability, improve stakeholder returns through organic and acquisitive growth, and by driving continual efficiencies throughout the organisation.</p>
                   <article><ArrowOutwardIcon  style={{color:'#2eb8b8'}} /></article>
                   <img src='https://trfastenings.blob.core.windows.net/sitecontent/e6df0089963b4bcda2a6388a9fbe7bd2.png' alt=''></img>
               </div>
        </div>
    </div>
  )
}

export default Purpose