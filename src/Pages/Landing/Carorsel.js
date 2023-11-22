import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './Carousel.css';
import { useNavigate } from 'react-router';

function UncontrolledExample() {

  const navigate = useNavigate();

  return (
    <Carousel>
      <Carousel.Item className='carouselItem'>
        <img src='https://trfastenings.blob.core.windows.net/sitecontent/48d2fefe879c42b79c75d2ad12f6bb23.jpg'/>
        <Carousel.Caption className='Carousel-Caption'>
        <div className='Carousel-Caption-Div'>
            <h3 style={{color:'black'}}>Product visualisers</h3>
            <p>TR’s Product Visualisers assist companies at the design stage. A range of options enables the user to interact with the products.</p>
            <button onClick={()=> navigate('./products')}>
              Find out more
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img src='https://trfastenings.blob.core.windows.net/sitecontent/332bead8d69449bd8c325afa9264f225.jpg'/>
        <Carousel.Caption className='Carousel-Caption'>
          <div className='Carousel-Caption-Div'>
            <h3 style={{color:'black'}}>Knowledge Base</h3>
            <p>Find engineering data on our range of products including installation and tooling guidelines, mechanical and material properties and more.</p>
            <button onClick={()=> navigate('./knowledge-base')}>
              Find out more
            </button>
          </div>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img src='https://trfastenings.blob.core.windows.net/sitecontent/5642de1a9dd54689b65fe418ceabe9ac.png'/>
        <Carousel.Caption className='Carousel-Caption'>
        <div className='Carousel-Caption-Div'>
            <h3 style={{color:'black'}}>TR in industry</h3>
            <p>Blending our global manufacturing capability with strong distribution and logistic support creates a winning combination.</p>
            <button onClick={()=> navigate('./industries')}>
              Find out more
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;


// import React, { useState } from "react";
// import "./Carousel.css";

// import Carousel from "react-bootstrap/Carousel";

// const CompanySlider = () => {
//   const [data] = useState([
//     {
//       imgData:
//         "https://trfastenings.blob.core.windows.net/sitecontent/48d2fefe879c42b79c75d2ad12f6bb23.jpg",
//       head: "Product visualisers",
//       para: "TR’s Product Visualisers assist companies at the design stage. A range of options enables the user to interact with the products.",
//     },
//     {
//       imgData:
//         "https://trfastenings.blob.core.windows.net/sitecontent/332bead8d69449bd8c325afa9264f225.jpg",
//       head: "Knowledge Base",
//       para: `Find engineering data on our range of products including installation and tooling guidelines, mechanical and material properties and more.`,
//     },
//     {
//       imgData:
//         "https://trfastenings.blob.core.windows.net/sitecontent/5642de1a9dd54689b65fe418ceabe9ac.png",
//       head: "TR in industry",
//       para: "Blending our global manufacturing capability with strong distribution and logistic support creates a winning combination.",
//     },
//   ]);
//   return (
//     <div style={{ marginTop: "20px" }}>
//       <Carousel>
//         {data &&
//           data.map((e) => {
//             return (
//               <Carousel.Item className="Landing-carousal">
//                 {/* <img src={e.imgData} height='100%' width='100%'></img> */}
//                 <div className="Landing-slider-main-div">
//                   <img src={e.imgData}></img>
//                   <div className="Landing-slider-inner-div">
//                     <div>
//                       <h4>{e.head}</h4>

//                       <p>{e.para}</p>
//                       <button>Find out more</button>
//                     </div>
//                   </div>
//                 </div>
//               </Carousel.Item>
//             );
//           })}
//       </Carousel>
//     </div>
//   );
// };

// export default CompanySlider;