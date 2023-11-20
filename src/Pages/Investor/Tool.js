import React from 'react'
import './Tool.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Tool = () => {
  return (
    <div>
         <div className='Quick-main-div'>
        <div className='Quick-div1'>
             <h4>Investor tools</h4>
        </div>
        <div className='Quick-div2'>
            <div className='quick-div2-left'>
              <div>
                <h3>KEY ANNOUNCEMENTS</h3>
                <h2>Financial calendar</h2>
                <article><ArrowOutwardIcon style={{color:'#2eb8b8'}}/></article>
              </div>
              <div>
                <h3>LATEST NEWS</h3>
                <h2>Regulatory news service (RNS)</h2>
                <article><ArrowOutwardIcon style={{color:'#f49303'}}/></article>
              </div>
              <div>
                <h3>INTERACTIVE SHARE INFORMATION</h3>
                <h2>Share data</h2>
                <article><ArrowOutwardIcon style={{color:'#0099cc'}}/></article>
              </div>
              <div>
                <h3>DOWNLOADS</h3>
                <h2>Our reports & presentations</h2>
                <article><ArrowOutwardIcon style={{color:'rgb(117, 2, 117)'}}/></article>
                </div>   
            </div>
           <div className='quick-div2-right'>
                  <div>
                    <h3>TSR</h3>
                    <h2>Total shareholder return</h2>
                    <article><ArrowOutwardIcon style={{color:'#38a2dc'}}/></article>
                  </div>
                  <div>
                    <h3>INTERACTIVE SUSTAINABILITY</h3>
                    <h2>Interactive analysis tool</h2>
                    <article><ArrowOutwardIcon style={{color:'#339933'}}/></article>
                  </div>
                  <div>
                    <h3>RESEARCH AND ANALYSIS</h3>
                    <h2>Equity research</h2>
                    <article><ArrowOutwardIcon style={{color:'#686864'}}/></article>
                  </div>
           </div>
           
        </div>
    </div>
    </div>
  )
}

export default Tool