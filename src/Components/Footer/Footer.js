import React, { useState } from "react";
import "./Footer.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Footer = () => {
  const [data, setData] = useState([
    "https://trfastenings.blob.core.windows.net/sitecontent/67c5f22b22e0497da5198214c57270ab.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/2a6fc4ab17aa4a1aa7ab42604e042973.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/245ac7890ae65477df4f757825e51234.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/87623bc456dea098765412bcede09854.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/9faf41502d58493fc7c3a5c607a82d98.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/b4df9d11d05d4db5c0d2522760b028ea.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/e247718850c3477cac0134945524aee3.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/d7621562148343a1c7200ac999b81eb8.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/70de797ab9bd41a9a261eb4d22e0e8ae.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/35a1a5da4255410ab0883de9846b21d3.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/35a1a5da4255410ab0883de9846b21d3.png",
    "https://trfastenings.blob.core.windows.net/sitecontent/35a1a5da4255410ab0883de9846b21d3.png",
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3; // Number of slides to show at once
  const slides = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    // Add more image paths as needed
  ];

  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + slidesToShow) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - slidesToShow + slides.length) % slides.length);
  };

  return (
    <div>
      <div className="Footer-main-div">
        <div className="footer-left-div">
          <div className="left-div1">
            <img
              src="https://trfastenings.blob.core.windows.net/sitecontent/358606d6843655b2345bcd7a37f3944b.png"
              height="160px"
              width="140px"
            ></img>
            <p className="left-para1">Focused on the future</p>
            <h3>Our purpose:</h3>
            <p>
              To provide Trusted Reliability at every turn to our customers,
              suppliers and our people, empowering them to deliver sustainable
              products and solutions that add value to society and our planet.
            </p>
          </div>
          <div className="left-div2">
            <h3>Contact us:</h3>
            <p>
              Trifast House, Bellbrook Park, Uckfield, East Sussex, TN22 1QW
            </p>
            <p>Tel: 08454 811 800</p>
            <div>
              <p>
                Email: <span>General enquiries</span>
              </p>
              <p>
                Email: <span>Investor relations</span>
              </p>
              <p>
                Email: <span>Shareholders</span>
              </p>
            </div>
          </div>
          <div className="left-div3">
            <p>Contact with us</p>
            <div>
              <img
                src="https://trfastenings.blob.core.windows.net/sitecontent/4351ded7e7e1464b98d2502a34c653b7.svg"
                alt="footer-media-icons"
              ></img>
              <img
                src="https://trfastenings.blob.core.windows.net/sitecontent/75a225deccc8419c938f5e948bf2d650.svg"
                alt="footer-media-icons"
              ></img>
              <img
                src="https://trfastenings.blob.core.windows.net/sitecontent/ce945acf864e400c935d920987a01edd.svg"
                alt="footer-media-icons"
              ></img>
              <img
                src="https://trfastenings.blob.core.windows.net/sitecontent/b52f52e476314bb9b549144dd67cb7f8.svg"
                alt="footer-media-icons"
              ></img>
            </div>
          </div>
        </div>
        <div className="footer-right-div">
          <p>Proud member of the Trifast plc Group of companies</p>


          
      <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}>
        {data.map((slide, index) => (
          <div key={index} className="slide">
            <img className="footer-slider-image" src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="prev-button">< ArrowBackIosIcon/></button>
      <button onClick={prevSlide} className="next-button"><ArrowForwardIosIcon/></button>
    </div>
          <div className="footer-partner-list">
            {data.map((e) => {
              return <img src={e} alt="img"></img>;
            })}
          </div>

          <div className="footer-list">
            <p>Company</p>
            <p> Products</p>
            <p>Contact</p>
            <p>Services</p>

            <p>Investors</p>
            <p>Knowledge Base</p>
            <p>Sustainabipty</p>
            <p>Industries</p>
            <p> Careers </p>

            <p>Register/Login</p>
          </div>

          <div className="right-div3">
            <div>
              <img src="https://trfastenings.blob.core.windows.net/sitecontent/24e300787d1b78d3077d8862365d7b85.png"></img>
            </div>
            <div>
              <img src="https://trfastenings.blob.core.windows.net/sitecontent/36a411898d2c89e4188f0084476e8d07.png"></img>
            </div>
            <div>
              <img
                className="footer-annual-image"
                src="https://trfastenings.blob.core.windows.net/sitecontent/34e300787d1b78e4188e9973476e8c96.png"
              ></img>
              <p className="annual-para">
                Download the Trifast plc Annual Report
              </p>
            </div>
            <div className="news-letter-div">
              <h3>Newsletter</h3>
              Stay up to date with news and innovations from TR
              <button>sign up</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Footer;
