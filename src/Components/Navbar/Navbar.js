import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const navigate = useNavigate();

  function openToggle(){
    const accordion = document.querySelector(".accordion");
    accordion.style.display = 'block';

    const openToggle = document.querySelector(".openToggle");
    openToggle.style.display = 'none';

    const closeToggle = document.querySelector(".closeToggle");
    closeToggle.style.display = 'block';

   
  }

  function closeToggle(){
    const accordion = document.querySelector(".accordion");
    accordion.style.display = 'none';

    const openToggle = document.querySelector(".openToggle");
    openToggle.style.display = 'block';    
    
    const closeToggle = document.querySelector(".closeToggle");
    closeToggle.style.display = 'none';

  }

  function openDropDown(){
    const dropdown = document.querySelector(".profile-dropdown1")
 
    dropdown.style.display='flex'
    console.log(dropdown)
  }

  return (
    <div className="navbarBody">
      <nav className="navbar-expand">
        <div className="navbar-container">
          <div className="collapsible-navbar">
            <div className="nav-logo" onClick={()=> navigate('/')}>
              <img src="https://trfastenings.blob.core.windows.net/sitecontent/358606d6843655b2345bcd7a37f3944b.png" />
            </div>
            <div className="navbar-upper-right">
              {/* <div className="navbar-upper">
                <div className="nav-logo1">
                  <img src="https://trfastenings.blob.core.windows.net/sitecontent/358606d6843655b2345bcd7a37f3944b.png" />
                </div> */}
                <div className="navbar-upper">
                <div className="nav-logo1">
                  <img src="https://trfastenings.blob.core.windows.net/sitecontent/358606d6843655b2345bcd7a37f3944b.png" />
                </div> 

                  <span>Bookmark this page</span>
                  <span>
                    <img src="https://trfastenings.blob.core.windows.net/sitecontent/2604c4e121f5483eb5ed983dcee78b0e.svg" />
                  </span>
                  <div>
                    <span style={{ color: "#00a9b3", fontSize: "20px" }}>
                      <b>LON: 69.00 GBX</b>
                    </span>
                    <span style={{ color: "black" }}>|</span>
                    <sapn style={{ color: "#00a9b3" }}>CAREERS</sapn>
                    <span style={{ marginLeft: "50px" }}>
                      <img style={{cursor:'pointer'}} src="https://trfastenings.blob.core.windows.net/sitecontent/45bb321abc456e6aa8dc97921b992345.png" />
                    </span>
                    <span style={{ marginRight: "0px" }} onClick={()=>navigate("/sign-in")}>
                      <img style={{cursor:'pointer'}} src="https://trfastenings.blob.core.windows.net/sitecontent/d0f6693fb5594a969df92e34df6244c9.svg" />
                      <div className="profile-dropdown1" id="profile-dropdown1">
                        <p>My account</p>
                        <p>View enquires</p>
                        <p>View collections</p>
                      </div>
                    </span>
                  </div>
                {/* </div> */}
              </div>
              <div className="menu-list">
                <div className="menuContainer">
                  <div className="company" onClick={()=>navigate('/company')}>
                     Company
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="companyDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-company">
                      <div class="row">
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading">
                            Newsroom &amp; media
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Press releases</p>
                            <p>Product news</p>
                            <p>Product news</p>
                            <p>Company literature</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading">Leadership</h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>The plc Board</p>
                            <p>Executive Committee</p>
                            <p>Operational Management</p>
                          </div>{" "}
                        </div>

                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading">
                            Documentation and policies
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>

                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading">
                            Acquisitions
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>

                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading">KPIs</h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>

                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading">
                            Business model
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="investors" onClick={()=>navigate('/investor')}>
                    Investors
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="investorsDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-investors">
                      <div class="row">
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--parent">
                            What sets us apart
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Shareholder information
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Investor profile</p>
                            <p>Frequently asked questions</p>
                            <p>Advisers</p>
                            <p>Guidance to shareholders</p>
                            <p>Glossary of terms</p>
                            <p>Shareholder meetings</p>
                            <p>Total shareholder return</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Governance
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Committees</p>
                            <p>Comppance statement</p>
                            <p>Remuneration popcy</p>
                            <p>Our stakeholders</p>
                            <p>Capital allocation</p>
                            <p>Section 172 statement</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Financial information
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Analysis tool - financial</p>
                            <p>Financial calendar</p>
                            <p>Latest financial resdivts</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            RNS
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Equity research
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Share data
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Reports and presentations
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products"  onClick={()=>navigate('/products')} >
                    Products
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="productssDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-products">
                      <div class="products-row">
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/3e246016ad7f4ec190c3eecc07e2ed18.jpg"
                            alt="Collection of Screws and Bolts"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Screws and Bolts
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/3644db77562842bfa1a5b8230b62512a.jpg"
                            alt="Collection of Nuts"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Nuts
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/b1524fa1188e4b6ebea1360bdf36f928.jpg"
                            alt="Collection of Washers, Circlips, Rings, Seals, O-Rings"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Washers, Circlips, Rings, Seals, O-Rings
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/a6398c530f1243d4886d07258199acbb.jpg"
                            alt="Collection of Fasteners for Sheet Metal"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Fasteners for Sheet Metal
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/90ff2b0c93bf407c8327ba47626e0c75.jpg"
                            alt="Collection of Fasteners for Plastic"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Fasteners for Plastic
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/87fdbdb3cb8944c98d89c37e24c77afc.jpg"
                            alt="Collection of Enclosure Hardware"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Enclosure Hardware
                          </h5>
                        </div>
                      </div>
                      <div class="products-row">
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/00d6dac4e8c6439cba18f9ca29434ab7.jpg"
                            alt="Collection of Plastic Hardware"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Plastic Hardware
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/977cce438bc548e6a6f3de9443e4844b.jpg"
                            alt="Collection of Cable Glands"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Cable Glands
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/12aa0f5128714f97bbedd9ab3fd68775.jpg"
                            alt="Collection of Security Fasteners"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Security Fasteners
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/d20ad9b1a2ba4532a3730fced06f576d.jpg"
                            alt="Collection of Spacers and Pillars"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Spacers and Pillars
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/ad50d358e028414e83b52166a3c1ae72.jpg"
                            alt="Collection of Tooling and Driver Bits"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Tooling and Driver Bits
                          </h5>
                        </div>
                        <div class="col-6 col-md-2">
                          <img
                            class="nav-dropdown-menu__image"
                            src="https://trfastenings.blob.core.windows.net/menu/b2fdcf05fb244729813093f9734bce43.jpg"
                            alt="Collection of Other Hardware"
                          />
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Other Hardware
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="knowledge" onClick={()=> navigate('/knowledge-base')}>
                    Knowledge Base
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="knowledgeDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-knowledge">
                      <div class="row">
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--parent">
                            Engineering Data
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Gauge conversion tables</p>
                            <p>Fastener standards</p>
                            <p>Decimal equivalents</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                        <div className="col-md-3">
                          <h5 className="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Tolerances
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Friction coefficients s/steel</p>
                            <p>Friction coefficients steel</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Materials
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Properties of plastics</p>
                            <p>Properties of stainless steel</p>
                            <p>Hardness comparison tables</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Coatings
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Zinc flake</p>
                            <p>Zinc nickel</p>
                            <p>Electroplated Zinc</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Thread geometries
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Metric Coarse Standard</p>
                            <p>Metric Fine</p>
                            <p>Thread conversion table</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Metric screws
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>S/steel tightening torques</p>
                            <p>Socket screw tightening torque</p>
                            <p>Mechanical properties</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Self Tapping Screws
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Hole sizes</p>
                            <p>Thread geometry</p>
                            <p>Torque data</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Threadforming Screws for Metal
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>DIN7500 Tap-Fix® extruded</p>
                            <p>DIN7500 Tap-Fix® hole sizes</p>
                            <p>DIN7500 Tap-Fix® torsional</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Fasteners for Plastic
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Plas-Tech® 30 installation</p>
                            <p>Screws for Plastic to JIS</p>
                            <p>Design guide considerations</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Metric Nuts and Washers
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Flat Washer standards</p>
                            <p>Wedge Lock Nuts</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Self Clinch Fasteners
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Nut installation and tooling</p>
                            <p>Stud installation and tooling</p>
                            <p>Broaching nut installation</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Rivet Bushes
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Round Serrated Face</p>
                            <p>Round Serrated Spigot</p>
                            <p>Hex Rivet Bush installation</p>
                            <p>
                              <b>View all articles</b>
                            </p>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="services" onClick={()=> navigate('/services')}>
                    Services
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="servicesDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-services">
                      <div class="row">
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--parent">
                            Manufacturing
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>TR Formac</p>
                            <p>TR SFE</p>
                            <p>TR PSEP</p>
                            <p>TR VIC</p>
                            <p>pcences</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Logistics
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Supply chain optimisation</p>
                            <p>Supply chain solutions</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                            Sourcing
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          >
                            <p>Product pne card</p>
                          </div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Technical support services
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Quality
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Trade bodies and associations
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="industries"
                  onClick={()=> navigate('/industries')}
                  >
                    Industries
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="industriesDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-industries">
                      <div class="row">
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--parent">
                            Light vehicle
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Heavy vehicle
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Health &amp; home
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Energy, tech &amp; infrastructure
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            General industrial
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Distributors
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sustainability" 
                  onClick={()=> navigate('/sustainability')}
                  >
                  Sustainability
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="sustainabilityDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-sustainability">
                      <div class="row">
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--parent">
                            Sustainability governance
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Create socio-economic value
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Environment and climate change
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Sustainable supply chain
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Sustainable innovation
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading">
                            Analysis tool - sustainability
                          </h5>
                          <div
                            class="nav-dropdown-menu__list"
                            style={{ paddingBottom: "20px" }}
                          ></div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact"
                  onClick={()=>navigate('/contact')}
                  >
                    Contact
                    <span>
                      {" "}
                      <ArrowDropDownIcon className="contactDropdown" />
                    </span>
                    <div class="nav-dropdown-menu-body-contact">
                      <div class="row">
                        <div class="col-md-3">
                          <h5 class="nav-dropdown-menu__heading">Contact</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-icon">
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="toggle">
              <div 
              className="openToggle"
              onClick={()=> openToggle()}
              // style={{border:'1px solid red'}}
              >
              <MenuIcon/>
              </div>
              <div 
              className="closeToggle"
              onClick={()=> closeToggle()}
              // style={{border:'1px solid red'}}
              >
                <CloseIcon/>
              </div>

            </div>
          </div>
        </div>
      </nav>
      <div className="accordion">
          <div className="accorsion-upper">
                    <span style={{ marginLeft: "5px" }}>
                      <img src="https://trfastenings.blob.core.windows.net/sitecontent/45bb321abc456e6aa8dc97921b992345.png" />
                    </span>
                    <span style={{ marginRight: "0px" }}>
                      <img src="https://trfastenings.blob.core.windows.net/sitecontent/d0f6693fb5594a969df92e34df6244c9.svg" />
                    </span>
                    <div className="search-icon">
                      <SearchIcon />
                    </div>
                    <span style={{color:'#1a7abf'}}>Bookmark this page</span>
          </div>
          <Accordion className="accordionBody">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="AccordionSummary1"
            >
              <Typography onClick={()=>navigate('./company')}>
              Company
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Newsroom & media
                </p>
                <p>
                  Leadership
                </p>
                <p>
                  Documentation and policies
                </p>
                <p>
                  Acquisitions
                </p>
                <p>
                  KPIs
                </p>
                <p>
                  Business model
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordionBody">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="AccordionSummary1"
            >
              <Typography
              onClick={()=>navigate('./investor')}
              >
              Investors
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  What set us apart
                </p>
                <p>
                  Shareholder information
                </p>
                <p>
                  Governance
                </p>
                <p>
                  Financial information
                </p>
                <p>
                  RNS
                </p>
                <p>
                  Enquiry research
                </p>
                <p>
                  Share data
                </p>
                <p>
                  Reports and presentations
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordionBody">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="AccordionSummary1"
            >
              <Typography onClick={()=>navigate('./products')}>Products</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div class="Accordion-products-row">
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/3e246016ad7f4ec190c3eecc07e2ed18.jpg"
                      alt="Collection of Screws and Bolts"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Screws and Bolts
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/3644db77562842bfa1a5b8230b62512a.jpg"
                      alt="Collection of Nuts"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Nuts
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/b1524fa1188e4b6ebea1360bdf36f928.jpg"
                      alt="Collection of Washers, Circlips, Rings, Seals, O-Rings"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Washers, Circlips, Rings, Seals, O-Rings
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/a6398c530f1243d4886d07258199acbb.jpg"
                      alt="Collection of Fasteners for Sheet Metal"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Fasteners for Sheet Metal
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/90ff2b0c93bf407c8327ba47626e0c75.jpg"
                      alt="Collection of Fasteners for Plastic"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Fasteners for Plastic
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/87fdbdb3cb8944c98d89c37e24c77afc.jpg"
                      alt="Collection of Enclosure Hardware"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Enclosure Hardware
                    </h5>
                  </div>
                </div>
                <div class="Accordion-products-row">
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/00d6dac4e8c6439cba18f9ca29434ab7.jpg"
                      alt="Collection of Plastic Hardware"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Plastic Hardware
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/977cce438bc548e6a6f3de9443e4844b.jpg"
                      alt="Collection of Cable Glands"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Cable Glands
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/12aa0f5128714f97bbedd9ab3fd68775.jpg"
                      alt="Collection of Security Fasteners"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Security Fasteners
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/d20ad9b1a2ba4532a3730fced06f576d.jpg"
                      alt="Collection of Spacers and Pillars"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Spacers and Pillars
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/ad50d358e028414e83b52166a3c1ae72.jpg"
                      alt="Collection of Tooling and Driver Bits"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Tooling and Driver Bits
                    </h5>
                  </div>
                  <div class="Accordion-col-6 col-md-2">
                    <img
                      class="nav-dropdown-menu__image"
                      src="https://trfastenings.blob.core.windows.net/menu/b2fdcf05fb244729813093f9734bce43.jpg"
                      alt="Collection of Other Hardware"
                    />
                    <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                      Other Hardware
                    </h5>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordionBody">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="AccordionSummary1"
            >
              <Typography onClick={()=>navigate('./knowledge-base')}>Knowledge Base</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Engineering Data
                </p>
                <p>
                  Tolerances
                </p>
                <p>
                  Materials
                </p>
                <p>
                  Coatings
                </p>
                <p>
                  Thread geometries
                </p>
                <p>
                  Metric screws
                </p>
                <p>
                  Threadforming Screws for Metal
                </p>
                <p>
                  Fasteners for Plastic
                </p>
                <p>
                  Metric Nuts and Washers
                </p>
                <p>
                  Self Clinch Fasteners
                </p>
                <p>
                  Rivet Bushes
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordionBody">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="AccordionSummary1"
            >
              <Typography onClick={()=>navigate('./services')}>Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Manufacturing
                </p>
                <p>
                  Logistics
                </p>
                <p>
                  Sourcing
                </p>
                <p>
                  Technical support services
                </p>
                <p>
                  Quality
                </p>
                <p>
                  Trade bodies and associations
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordionBody">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography onClick={()=>navigate('./industries')}>Industries</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Light vehicle
                </p>
                <p>
                  Heavy vehicle
                </p>
                <p>
                  Health & home
                </p>
                <p>
                  Energy, tech & infrastructure 
                </p>
                <p>
                  General industrial
                </p>
                <p>
                  Distributors
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordionBody">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="AccordionSummary1"
            >
              <Typography onClick={()=>navigate('./sustainability')}>Sustainability</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Sustainability governance
                </p>
                <p>
                  Create socio-economic value
                </p>
                <p>
                  Environment and climate change
                </p>
                <p>
                  Sustainable supply chain
                </p>
                <p>
                  Sustainable innovation
                </p>
                <p>
                  Analysis tool - sustainability
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordionBody" >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon className = "expand" />}
              aria-controls="panel2a-content"
              id="panel2a-header"             
            >
              <Typography onClick={()=>navigate("/contact")}>Contact</Typography>
              
            
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>Contact</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
    </div>
  );
};

export default Navbar;
