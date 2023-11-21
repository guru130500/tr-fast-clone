import React from "react";
import "./Quick.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const Quick = () => {
  return (
    <div>
      <div className="Quick-main-div">
        <div className="Quick-div1">
          <h4>Quick links</h4>
        </div>
        <div className="Quick-div2">
          <div className="quick-div2-left">
            <div>
              <h3>ABOUT US</h3>
              <h2>Company information</h2>
              <article>
                <ArrowOutwardIcon style={{ color: "#2eb8b8" }} />
              </article>
            </div>
            <div>
              <h3>DESIGN, PRODUCE, DELIVER</h3>
              <h2>Business model</h2>
              <article>
                <ArrowOutwardIcon style={{ color: "#f49303" }} />
              </article>
            </div>
            <div>
              <h3>DOWNLOADS</h3>
              <h2>Documentation & policies</h2>
              <article>
                <ArrowOutwardIcon style={{ color: "#0099cc" }} />
              </article>
            </div>
            <div>
              <h3>GROWTH FOR THE FUTURE</h3>
              <h2>Investors</h2>
              <article>
                <ArrowOutwardIcon style={{ color: "rgb(117, 2, 117)" }} />
              </article>
            </div>
          </div>
          <div className="quick-div2-right">
            <div>
              <h3>OUR MARKETS</h3>
              <h2>Industries</h2>
              <article>
                <ArrowOutwardIcon style={{ color: "#38a2dc" }} />
              </article>
            </div>
            <div>
              <h3>GET IN TOUCH</h3>
              <h2>Contact us</h2>
              <article>
                <ArrowOutwardIcon style={{ color: "#339933" }} />
              </article>
            </div>
            <div>
              <h3>SECURING A SUSTAINABLE FUTURE</h3>
              <h2>Sustainability report</h2>
              <article>
                <ArrowOutwardIcon style={{ color: "#686864" }} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quick;
