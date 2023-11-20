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
        >
          <Typography>
            <h5>
              <b>Engineering data</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Tolerances</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Materials</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Coatings</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Thread geometries</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Metric screws</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Self Tapping Screws</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Threadforming Screws for Metal</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Fasteners for Plastic</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Metric Nuts and Washers</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Self Clinch Fasteners</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="Knowledge-Accordion-card">
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className="addCircleOutlineIcon" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h5>
              <b>Rivet Bushes</b>
            </h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
