import React, { useState } from "react";

import "./CompanySlider.css";

import Carousel from "react-bootstrap/Carousel";

const CompanySlider = () => {
  const [data] = useState([
    {
      imgData:
        "https://trfastenings.blob.core.windows.net/sitecontent/8e5698e861c94c95952f5fe9d7777a61.png",
      head: "Global footprint",
      para: "The TR Group of companies consists of 33&nbsp;locations within the UK, Asia, Europe and the USA including seven&nbsp;high volume sites manufacturing cold forged fasteners and special parts and three&nbsp;technical and innovation centres.",
    },
    {
      imgData:
        "https://trfastenings.blob.core.windows.net/sitecontent/4e547b11af8c4b4e8c865af05973aa08.png",
      head: "Who we supply",
      para: `We supply components to a mix of OEM's and Tier 1 companies globally across a wide range of industries including; light vehicle, heavy vehicle, health &amp; home, energy, tech &amp; infrastructure, general industrial and distributors.`,
    },
    {
      imgData:
        "https://trfastenings.blob.core.windows.net/sitecontent/a9412ef56ce14112986cf01a8a9c39fa.png",
      head: "Our Services",
      para: "We deliver comprehensive support to our customers across every requirement, from concept design through to technical engineering consultancy, manufacturing, supply management and global logistics.",
    },
  ]);
  return (
    <div style={{ marginTop: "20px" }}>
      <Carousel>
        {data &&
          data.map((e) => {
            return (
              <Carousel.Item className="Company-carousal">
                {/* <img src={e.imgData} height='100%' width='100%'></img> */}
                <div className="Company-slider-main-div">
                  <img src={e.imgData}></img>
                  <div className="Company-slider-inner-div">
                    <div>
                      <h4>{e.head}</h4>

                      <p>{e.para}</p>
                      <button>Find out more</button>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
};

export default CompanySlider;
