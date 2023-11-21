import React from 'react';
import './Securing.css';

const Securing = () => {
  return (
    <div className="ProduceBody">
      <div className="ProduceImg">
        <img src="https://trfastenings.blob.core.windows.net/sitecontent/3518d0d13c9649c19373caf41dc621fa.jpg" />
      </div>
      <div className="ProduceText"
        style={{background:'#1a7abf'}}
      >
        <div className="ProduceTextContent"
        style={{width:'75%'}}
        >
          <h6>SECURING A SUSTAINABLE FUTURE</h6>
          <hr/>
          <h2>The sustainability strategy landscape</h2>
          <p>
            Trifast is committed to securing a sustainable future. Our sustainability strategy is helping us to play our part in shaping a sustainable economy.
          </p>
          <br/>
          <button style={{width:'90%'}}>Read More in our Sustainability Report</button>
        </div>
      </div>
    </div>
  )
}

export default Securing
