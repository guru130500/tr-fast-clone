import React from "react";
import "./Produce.css";

const Produce = () => {
  return (
    <div className="ProduceBody">
      <div className="ProduceImg">
        <img src="https://trfastenings.blob.core.windows.net/sitecontent/dc2555c46d1a4c2d963ee66bb51f7156.jpg" alt="" />
      </div>
      <div className="ProduceText">
        <div className="ProduceTextContent">
          <h6>PRODUCE</h6>
          <hr/>
          <h2>Manufacturing</h2>
          <p>
            Our manufacturing network spans two continents and represents
            approximately a third of the Group’s business. We can ensure parts
            are made in the right part of the world to meet your quality,
            volumes, cost and delivery needs.
          </p>
          <br/>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Produce;
