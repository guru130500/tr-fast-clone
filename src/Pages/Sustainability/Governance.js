import React from "react";
import "./Governance.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Governance = () => {
  return (
    <div className="Governance-main-div">
      <div className="Governance-div-left">
        <div className="Governance-left-ImgDiv">
          <article>
            <ArrowOutwardIcon style={{ color: "#1a7abf" }} />
          </article>
          <img src="https://trfastenings.blob.core.windows.net/sitecontent/fe5b050ab0b343ae8c53f7c21d17270a.jpg" />
        </div>
        <div className="GovernanceTextContent">
          <h6>GOVERNANCE</h6>
          <hr />
          <h2>Sustainability governance</h2>
          <p>
            Our robust ESG governance framework of committees and global
            networks ensuring a collaborative and proactive approach to
            embedding our sustainability strategy across the Group.
          </p>
          <br />
          <button>Read More</button>
        </div>
      </div>
      <div className="Governance-div-right">
        <div className="Governance-right-ImgDiv">
          <article>
            <ArrowOutwardIcon style={{ color: "#009640" }} />
          </article>
          <img src="https://trfastenings.blob.core.windows.net/sitecontent/b64662279b4d4851b1776fd45b0ee889.jpg" />
        </div>
        <div className="GovernanceTextContent">
          <h6>INTERACTIVE TOOL</h6>
          <hr />
          <h2>Interactive analysis tool – sustainability</h2>
          <p>
            Explore using our interactive analysis tool.
          </p>
          <br />
          <button>View tool</button>
        </div>
      </div>
    </div>
  );
};

export default Governance;
