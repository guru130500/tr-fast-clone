import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div className="service-parent">
      <div className="Service-main-div">

        <img src="https://3dprintingindustry.com/wp-content/uploads/2018/12/Researcher-in-the-Nottingham-Advanced-Robotics-Laboratory.jpg" height='100%' width='100%'></img>
        <div className="Service-inner-div">
          <div>
            <h4>SERVICES</h4>
            <h1>Innovating since 1973</h1>

            <p>
              Since 1973, TR has evolved from a fastener distributor into a
              global assembly partner, developing delivery operations and
              providing design and engineering support to our customers.
            </p>
            <button>View our services</button>
          </div>
        </div>
      </div>
      <div className="Service-inner-div2">
        <div>
          <h4>SERVICES</h4>
          <h1>Innovating since 1973</h1>

          <p>
            Since 1973, TR has evolved from a fastener distributor into a global
            assembly partner, developing delivery operations and providing
            design and engineering support to our customers.
          </p>
          <button>View our services</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
