import React from "react";
import './Produce.css';

const Deliver = () => {
  return (
    <div className="ProduceBody">
        <div className="ProduceText"
        style={{background:'#00a9b3'}}
        >
            <div className="ProduceTextContent">
                <h6>DELIVER</h6>
                <hr />
                <h2>Logistics</h2>
                <p>
                    Whether dealing with niche manufacturers or multinational household names, at TR we tailor our services to our customer requirements. Our aim is always to rationalise costs whilst providing excellence in terms of both product and service quality.
                </p>
                <br />
                <button>Read More</button>
            </div>
        </div>
        <div className="ProduceImg">
            <img src="https://trfastenings.blob.core.windows.net/sitecontent/dc2555c46d1a4c2d963ee66bb51f7156.jpg" />
        </div>
    </div>
  );
};

export default Deliver;
