import React from 'react'
import './Market.css'

const Market = () => {
  return (
   <div>
      <div className='market-main-div'>
         <div className='market-left-div'>
            <h3>MARKET INFORMATION</h3>
            <h2>London Stock Exchange</h2>
            <p>Read about Trifast on the LSE website including the company profile, FTSE index and TRI page.</p>
            <img src='https://trfastenings.blob.core.windows.net/sitecontent/337862685d194f2bbd80a3773ea2d9fd.png'></img>
            <button>Visit London Stock Exchange website</button>
         </div>
         <div className='market-right-div'>
            <img src='https://trfastenings.blob.core.windows.net/sitecontent/b348f7f1dfda4f8c953e7b5f3eda26e3.jpg'></img>
          
         </div>
      </div>
   </div>
  )
}

export default Market