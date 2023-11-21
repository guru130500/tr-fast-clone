import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordion.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function BasicAccordion() {
  return (
    <div className="Knowledge-Accordion">
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Engineering data</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="AccordionDetails">
              <p>
                Engineering and fastener terminology <span>»</span>
              </p>
              <h6>
                Joint Design
              </h6>
              <ul>
                <li>
                  <p>
                    Improving endurance strength <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Design guidelines for cylindrical joints <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Design guidelines for beam joints <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Estimating bolt diameters <span>»</span>
                  </p>
                </li>
              </ul>
              <h6>
                Installation
              </h6>
              <ul>
                <li>
                  <p>
                  Tapping sizes and clearance holes <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Guidelines for tightening factors and tolerances <span>»</span>
                  </p>
                </li>
              </ul>
              <p>
              Fastener standards <span>»</span>
              </p>
              <p>
              Wire number gauge conversion tables <span>»</span>
              </p>
              <p>
              Decimal equivalents <span>»</span>
              </p>
              <p>
              Useful conversion factors <span>»</span>
              </p>
              <p>
              IP ratings for Enclosure Hardware <span>»</span>
              </p>
              <p>
              Fasteners for Sheet Metal overview <span>»</span>
              </p>
              <p>
              Manufacturing process animations <span>»</span>
              </p>
              <p>
              Castors technical information <span>»</span>
              </p>
              <p>
              Product visualisers <span>»</span>
              </p>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Tolerances</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="AccordionDetails">
            <p>
            Coefficients of friction guidelines - stainless steel <span>»</span>
            </p>
            <p>
            Coefficients of friction guidelines - steel <span>»</span>
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Materials</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">
            <p>
            Stainless steel material properties <span>»</span>
            </p>
            <p>
            Hardness comparison tables <span>»</span>
            </p>
            <p>
            Plastics material specifications <span>»</span>
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Coatings</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">
            <p>
            Surface finish overview <span>»</span>
            </p>
            <p>
            Electroplated zinc <span>»</span>
            </p>
            <p>
            Zinc flake <span>»</span>
            </p>
            <p>
            Zinc nickel <span>»</span>
            </p>
            <p>
            Hydrogen embrittlement <span>»</span>
            </p>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Thread geometries</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">
            <p>
            Metric coarse standard <span>»</span>
            </p>
            <p>
            Metric fine <span>»</span>
            </p>
            <p>
            Unified Coarse UNC <span>»</span>
            </p>
            <p>
            Unified Fine UNF <span>»</span>
            </p>
            <p>
            Unified Extra Fine UNEF <span>»</span>
            </p>
            <p>
            British Standard Whitworth BSW <span>»</span>
            </p>
            <p>
            British Standard Fine <span>»</span>
            </p>
            <p>
            British Association <span>»</span>
            </p>
            <p>
            Thread conversion table <span>»</span>
            </p>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Metric screws</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">
              <h6>
              Steel fasteners
              </h6>
              <ul>
                <li>
                  <p>
                  Screws and bolts mechanical properties <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Screws and bolts material properties <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Nuts material properties <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Pre load and tightening torques coarse metric threads <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Pre load and tightening torques fine metric threads <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Minimum ultimate tensile loads <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Surface pressure data <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Socket screws tightening torques <span>»</span>
                  </p>
                </li>
              </ul>
              <h6>
              Non ferrous and stainless
              </h6>
              <ul>
                <li>
                  <p>
                  Non ferrous torque and tensile data <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Stainless steel mechanical properties <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Stainless steel pre load and tightening torques coarse metric threads <span>»</span>
                  </p>
                </li>
                <li>
                  <p>
                  Torsional performance PA66 screws (Plastic Hardware) <span>»</span>
                  </p>
                </li>
              </ul>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Self Tapping Screws</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">   
          <p>
          Thread geometry <span>»</span>
          </p>
          <p>
          Hole sizes <span>»</span>
          </p>
          <p>
          Torque data <span>»</span>
          </p>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Threadforming Screws for Metal</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">   
          <p>
          DIN7500 Tap-Fix® hole sizes sheet <span>»</span>
          </p>
          <p>
          DIN7500 Tap-Fix® hole sizes extruded holes <span>»</span>
          </p>
          <p>
          DIN7500 Tap-Fix® torsional performance <span>»</span>
          </p>
          <p>
          DIN7500 Tap-Fix® BUMAX® stainless steel screws <span>»</span>
          </p>
          <p>
          B thread to JIS hole sizes <span>»</span>
          </p>
        </div>

        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Fasteners for Plastic</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">   
          <p>
          Screws for Plastic design guide considerations <span>»</span>
          </p>
          <p>
          Plas-Tech 30® installation guide and hole sizes <span>»</span>
          </p>
          <p>
          Plas-Fix 45® installation guide and hole sizes <span>»</span>
          </p>
          <p>
          Plas-Fix 60® installation guide and hole sizes <span>»</span>
          </p>
          <p>
          Screws for Plastic to JIS hole sizes <span>»</span>
          </p>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Metric Nuts and Washers</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">   
          <p>
          Wedge Lock Nuts <span>»</span>
          </p>
          <p>
          Flat Washer standards <span>»</span>
          </p>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Self Clinch Fasteners</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">   
          <p>
          Nut installation and tooling <span>»</span>
          </p>
          <p>
          Stud installation and tooling <span>»</span>
          </p>
          <p>
          Flush Nut installation and tooling <span>»</span>
          </p>
          <p>
          Broaching Nut installation <span>»</span>
          </p>
          <p>
          Broaching Standoff installation and tooling <span>»</span>
          </p>
          <p>
          Blind Standoff installation and tooling <span>»</span>
          </p>
          <p>
          Through Standoff installation and tooling <span>»</span>
          </p>
          <p>
          Floating Fastener installation and tooling <span>»</span>
          </p>
          <p>
          Clip on Standoff installation and tooling <span>»</span>
          </p>
          <p>
          Low Profile Panel Fastener installation and tooling <span>»</span>
          </p>
          <p>
          Panel Fastener installation and tooling <span>»</span>
          </p>
          <p>
          Recess Panel fastener installation and tooling <span>»</span>
          </p>
          <p>
          Self Clinch Pin installation and tooling <span>»</span>
          </p>
          <p>
          Self Clinch installation forces <span>»</span>
          </p>
          <p>
          Self Clinch FAQs <span>»</span>
          </p>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="AccordionSummary"
        >
          <Typography>
            <h5>
              <b>Rivet Bushes</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionDetails">   
          <p>
          Rivet Bush tooling <span>»</span>
          </p>
          <p>
          Round Serrated Face Rivet Bush installation and tooling <span>»</span>
          </p>
          <p>
          Round Serrated Spigot Rivet Bush installation and tooling <span>»</span>
          </p>
          <p>
          Hexagon Rivet Bush installation and tooling <span>»</span>
          </p>
          <p>
          Tank Rivet Bush installation and tooling <span>»</span>
          </p>
          <p>
          Round Serrated Face Mini Rivet Bush installation and tooling <span>»</span>
          </p>
          <p>
          Round Serrated Face Rivet Bush Standoff installation and tooling <span>»</span>
          </p>
          <p>
          Round Serrated Face Mini Rivet Bush Standoff installation and tooling <span>»</span>
          </p>
          <p>
          Swage Nut Rivet Bush installation and tooling <span>»</span>
          </p>
        </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
