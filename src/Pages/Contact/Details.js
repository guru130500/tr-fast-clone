import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../Contact/Details.css";
const Details = () => {
  const [type, setType] = useState("UK & Ireland");

  return (
    <div className="details-container">
      <div className="location-btns">
        <Button
          variant="primary"
          className="btnn"
          onClick={() => {
            setType("UK & Ireland");
          }}
          autoFocus
        >
          UK & Ireland
        </Button>{" "}
        <Button
          variant="primary"
          className="btnn"
          onClick={() => {
            setType("Europe");
          }}
        >
          Europe
        </Button>{" "}
        <Button
          variant="primary"
          className="btnn"
          onClick={() => {
            setType("USA");
          }}
        >
          USA
        </Button>{" "}
        <Button
          variant="primary"
          className="btnn"
          onClick={() => {
            setType("Asia");
          }}
        >
          Asia
        </Button>{" "}
      </div>
      <div className="locations">
        {type === "UK & Ireland" && (
          <>
          <div className="address-container" >
            <div className="address">
              <h2 className="heading">Trifast plc</h2>
              <h5>Trifast plc</h5>
              <p>
                Trifast House, Bellbrook Park, Uckfield, East Sussex, TN22 1QW
              </p>
              <p>
                Registered in England | Registered No: 1103675 | VAT No.
                390068451
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span> +44 (0)1825 747366</span>
                </p>
                <p>
                  Email: <a href=""> Investor relations</a>
                </p>
                <p>
                  Email: <a href=""> Shareholders</a>
                </p>
                <p>
                  Email: <a href=""> Sustainability</a>
                </p>
              </div>
            </div>
            </div>
            <div className="address-container">
            <div className="address">
              <h2 className="heading">Texas</h2>
              <h5>TR Fastenings Inc</h5>
              <p>
              10811 Vine Crest Drive, Suite 190, Houston, Texas 77086, USA
              </p>
              <p>
              Registered in USA | Registered No: C0744783
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span> +1 800-280-2181</span>
                </p>
                <p>
                  Email: <a href=""> usa@trfastenings.com</a>
                </p>
                
              </div>
            </div>
            </div>
          </>
        )}
        {type === "Europe" && (
          <>
          <div className="address-container">
            <div className="address">
              <h2 className="heading">Netherlands</h2>
              <h5>TR Miller Holding B.V.</h5>
              <p>
              Kelvinstraat 5, 7575 AS, Oldenzaal, Holland
              </p>
              <p>
              Registered in Holland | Registered No: 003448083
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span> +31 (0)541 511 515</span>
                </p>
                <p>
                  Email: <a href=""> netherlands@trfastenings.com</a>
                </p>
                <p>
                  Fax: <a href=""> +31 (0)541 517 134</a>
                </p>
             
              </div>
              </div>
            </div>
            <div className="address-container">
            <div className="address">
              <h2 className="heading">Texas</h2>
              <h5>TR Fastenings Inc</h5>
              <p>
              10811 Vine Crest Drive, Suite 190, Houston, Texas 77086, USA
              </p>
              <p>
              Registered in USA | Registered No: C0744783
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span> +1 800-280-2181</span>
                </p>
                <p>
                  Email: <a href=""> usa@trfastenings.com</a>
                </p>
                
              </div>
            </div>
            </div>
          </>
        )}
        {type === "USA" && (
          <>
          <div className="address-container">
            <div className="address">
              <h2 className="heading">Texas</h2>
              <h5>TR Fastenings Inc</h5>
              <p>
              10811 Vine Crest Drive, Suite 190, Houston, Texas 77086, USA
              </p>
              <p>
              Registered in USA | Registered No: C0744783
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span> +1 800-280-2181</span>
                </p>
                <p>
                  Email: <a href=""> usa@trfastenings.com</a>
                </p>
                
              </div>
            </div>
            </div>
            <div className="address-container">
            <div className="address">
              <h2 className="heading">Singapore</h2>
              <h5>TR Asia Investment Holdings Pte Ltd (Asia Headquarters)</h5>
              <p>
              57 Senoko Road, Singapore 758121
              </p>
              <p>
                Registered in England | Registered No: 1103675 | VAT No.
                390068451
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span>  +65 6759 6033</span>
                </p>
                <p>
                  Fax: <a href=""> +65 6759 6022</a>
                </p>
                <p>
                  Email: <a href=""> asia@trfastenings.com</a>
                </p>
                
              </div>
            </div>
            </div>
          </>
        )}
        {type === "Asia" && (
          <>
          <div className="address-container">
            <div className="address">
              <h2 className="heading">Singapore</h2>
              <h5>TR Asia Investment Holdings Pte Ltd (Asia Headquarters)</h5>
              <p>
              57 Senoko Road, Singapore 758121
              </p>
              <p>
                Registered in England | Registered No: 1103675 | VAT No.
                390068451
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span>  +65 6759 6033</span>
                </p>
                <p>
                  Fax: <a href=""> +65 6759 6022</a>
                </p>
                <p>
                  Email: <a href=""> asia@trfastenings.com</a>
                </p>
                
              </div>
            </div>
            </div>
            <div className="address-container">
            <div className="address">
              <h2 className="heading">Texas</h2>
              <h5>TR Fastenings Inc</h5>
              <p>
              10811 Vine Crest Drive, Suite 190, Houston, Texas 77086, USA
              </p>
              <p>
              Registered in USA | Registered No: C0744783
              </p>
            </div>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h5 className="heading">Contact</h5>
                <p>
                  Phone: <span> +1 800-280-2181</span>
                </p>
                <p>
                  Email: <a href=""> usa@trfastenings.com</a>
                </p>
                
              </div>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
