import React from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbarBody">
      <nav className="navbar-expand">
        <div className="navbar-container">
          <div className="collapsible-navbar">
            <div className="nav-logo">
              <img src="https://trfastenings.blob.core.windows.net/sitecontent/358606d6843655b2345bcd7a37f3944b.png" />
            </div>
            <div className="navbar-upper-right">
              <div className="navbar-upper">
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
                    <img src="https://trfastenings.blob.core.windows.net/sitecontent/45bb321abc456e6aa8dc97921b992345.png" />
                  </span>
                  <span style={{ marginRight: "0px" }}>
                    <img src="https://trfastenings.blob.core.windows.net/sitecontent/d0f6693fb5594a969df92e34df6244c9.svg" />
                  </span>
                </div>
              </div>
              <div className="menu-list">
                <div className="menuContainer">
                  <div className="company">
                    Company
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div>
                    Investors
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div>
                    Products
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div>
                    Knowledge Base
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div>
                    Services
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div>
                    Industries
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div>
                    Sustainabidivty
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div>
                    Contact
                    <span>
                      {" "}
                      <ArrowDropDownIcon />
                    </span>
                  </div>
                  <div className="search-icon">
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="nav-dropdown-menu-body-company"> */}
          {/* <div class="nav-dropdown-menu-body">
              <div class="row">
                <div class="col-md-3">
                  <h5 class="nav-dropdown-menu__heading">Newsroom &amp; media</h5>
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
                  <h5 class="nav-dropdown-menu__heading">Acquisitions</h5>
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
                  <h5 class="nav-dropdown-menu__heading">Business model</h5>
                  <div
                    class="nav-dropdown-menu__list"
                    style={{ paddingBottom: "20px" }}
                  ></div>{" "}
                </div>
              </div>
            </div> */}
          {/* </div> */}

            {/* --------Company--------- */}
            
          <div class="nav-dropdown-menu-body">
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
                      <p>
                          Investor profile                        
                      </p>
                      <p>
                          Frequently asked questions                        
                      </p>
                      <p>
                          Advisers                        
                      </p>
                      <p>
                          Guidance to shareholders                        
                      </p>
                      <p>
                          Glossary of terms                        
                      </p>
                      <p>
                          Shareholder meetings                        
                      </p>
                      <p>
                          Total shareholder return                        
                      </p>
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
                      <p>
                          Committees                        
                      </p>
                      <p>
                          Comppance statement                        
                      </p>
                      <p>
                          Remuneration popcy                        
                      </p>
                      <p>
                          Our stakeholders                        
                      </p>
                      <p>
                          Capital allocation                        
                      </p>
                      <p>
                          Section 172 statement                        
                      </p>
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
                      <p>
                          Analysis tool - financial                        
                      </p>
                      <p>
                          Financial calendar                        
                      </p>
                      <p>
                          Latest financial resdivts                        
                      </p>
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
                    >
                    </div>{" "}
                  </div>
                </div>
          </div>

          {/*------------ Products------------- */}

          {/* <div class="nav-dropdown-menu-body">
            <div class="row">
              <div class="col-6 col-md-2">
                <img
                  class="nav-dropdown-menu__image"
                  src="https://trfastenings.blob.core.windows.net/menu/3e246016ad7f4ec190c3eecc07e2ed18.jpg"
                  alt="Collection of Screws and Bolts"
                />
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Screws-and-Bolts"
                    title="View Screws and Bolts products"
                  >
                    Screws and Bolts
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Nuts"
                  title="View Nuts products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/3644db77562842bfa1a5b8230b62512a.jpg"
                    alt="Collection of Nuts"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Nuts"
                    title="View Nuts products"
                  >
                    Nuts
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Washers-Circlips-Rings-Seals-O-Rings"
                  title="View Washers, Circlips, Rings, Seals, O-Rings products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/b1524fa1188e4b6ebea1360bdf36f928.jpg"
                    alt="Collection of Washers, Circlips, Rings, Seals, O-Rings"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Washers-Circlips-Rings-Seals-O-Rings"
                    title="View Washers, Circlips, Rings, Seals, O-Rings products"
                  >
                    Washers, Circlips, Rings, Seals, O-Rings
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Fasteners-for-Sheet-Metal"
                  title="View Fasteners for Sheet Metal products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/a6398c530f1243d4886d07258199acbb.jpg"
                    alt="Collection of Fasteners for Sheet Metal"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Fasteners-for-Sheet-Metal"
                    title="View Fasteners for Sheet Metal products"
                  >
                    Fasteners for Sheet Metal
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Fasteners-for-Plastic"
                  title="View Fasteners for Plastic products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/90ff2b0c93bf407c8327ba47626e0c75.jpg"
                    alt="Collection of Fasteners for Plastic"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Fasteners-for-Plastic"
                    title="View Fasteners for Plastic products"
                  >
                    Fasteners for Plastic
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Enclosure-Hardware"
                  title="View Enclosure Hardware products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/87fdbdb3cb8944c98d89c37e24c77afc.jpg"
                    alt="Collection of Enclosure Hardware"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Enclosure-Hardware"
                    title="View Enclosure Hardware products"
                  >
                    Enclosure Hardware
                  </a>
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Plastic-Hardware"
                  title="View Plastic Hardware products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/00d6dac4e8c6439cba18f9ca29434ab7.jpg"
                    alt="Collection of Plastic Hardware"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Plastic-Hardware"
                    title="View Plastic Hardware products"
                  >
                    Plastic Hardware
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Cable-Glands"
                  title="View Cable Glands products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/977cce438bc548e6a6f3de9443e4844b.jpg"
                    alt="Collection of Cable Glands"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Cable-Glands"
                    title="View Cable Glands products"
                  >
                    Cable Glands
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Security-Fasteners"
                  title="View Security Fasteners products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/12aa0f5128714f97bbedd9ab3fd68775.jpg"
                    alt="Collection of Security Fasteners"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Security-Fasteners"
                    title="View Security Fasteners products"
                  >
                    Security Fasteners
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Spacers-and-Pillars"
                  title="View Spacers and Pillars products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/d20ad9b1a2ba4532a3730fced06f576d.jpg"
                    alt="Collection of Spacers and Pillars"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Spacers-and-Pillars"
                    title="View Spacers and Pillars products"
                  >
                    Spacers and Pillars
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Tooling-and-Driver-Bits"
                  title="View Tooling and Driver Bits products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/ad50d358e028414e83b52166a3c1ae72.jpg"
                    alt="Collection of Tooling and Driver Bits"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Tooling-and-Driver-Bits"
                    title="View Tooling and Driver Bits products"
                  >
                    Tooling and Driver Bits
                  </a>
                </h5>
              </div>
              <div class="col-6 col-md-2">
                <a
                  href="/Products/Catalogue/Other-Hardware"
                  title="View Other Hardware products"
                >
                  <img
                    class="nav-dropdown-menu__image"
                    src="https://trfastenings.blob.core.windows.net/menu/b2fdcf05fb244729813093f9734bce43.jpg"
                    alt="Collection of Other Hardware"
                  />
                </a>
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  <a
                    href="/Products/Catalogue/Other-Hardware"
                    title="View Other Hardware products"
                  >
                    Other Hardware
                  </a>
                </h5>
              </div>
            </div>
          </div> */}

          {/* ------------Knowledge Base----------- */}
          {/* <div class="nav-dropdown-menu-body">
            <div class="row">
              <div class="col-md-3">
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--parent">
                    Engineering Data 
                </h5>
                <div
                  class="nav-dropdown-menu__list"
                  style={{ paddingBottom: "20px" }}
                >
                  <p>
                      Gauge conversion tables
                  </p>
                  <p>
                      Fastener standards
                  </p>
                  <p>
                      Decimal equivalents
                  </p>
                  <p>
                      <b>View all articles</b>
                  </p>
                </div>{" "}
              </div>
              <div class="col-md-3">
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--has-submenu">
                  Tolerances
                </h5>
                <div
                  class="nav-dropdown-menu__list"
                  style={{ paddingBottom: "20px" }}
                >
                  <p>
                      Friction coefficients s/steel
                  </p>
                  <p>
                      Friction coefficients steel
                  </p>
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
                  <p>
                      Properties of plastics
                  </p>
                  <p>
                      Properties of stainless steel
                  </p>
                  <p>
                      Hardness comparison tables
                  </p>
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
                  <p>
                      Zinc flake
                  </p>
                  <p>
                      Zinc nickel
                  </p>
                  <p>
                      Electroplated Zinc
                  </p>
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
                  <p>
                      Metric Coarse Standard
                  </p>
                  <p>
                      Metric Fine
                  </p>
                  <p>
                      Thread conversion table
                  </p>
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
                  <p>
                      S/steel tightening torques
                  </p>
                  <p>
                      Socket screw tightening torque
                  </p>
                  <p>
                      Mechanical properties
                  </p>
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
                  <p>
                      Hole sizes
                  </p>
                  <p>
                      Thread geometry
                  </p>
                  <p>
                      Torque data
                  </p>
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
                  <p>
                      DIN7500 Tap-Fix® extruded
                  </p>
                  <p>
                      DIN7500 Tap-Fix® hole sizes
                  </p>
                  <p>
                      DIN7500 Tap-Fix® torsional
                  </p>
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
                  <p>
                      Plas-Tech® 30 installation
                  </p>
                  <p>
                      Screws for Plastic to JIS
                  </p>
                  <p>
                      Design guide considerations
                  </p>
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
                  <p>
                      Flat Washer standards
                  </p>
                  <p>
                      Wedge Lock Nuts
                  </p>
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
                  <p>
                      Nut installation and tooling
                  </p>
                  <p>
                      Stud installation and tooling
                  </p>
                  <p>
                      Broaching nut installation
                  </p>
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
                  <p>
                      Round Serrated Face
                  </p>
                  <p>
                      Round Serrated Spigot
                  </p>
                  <p>
                      Hex Rivet Bush installation
                  </p>
                  <p>
                      <b>View all articles</b>
                  </p>
                </div>{" "}
              </div>
            </div>
          </div> */}

          {/* <div class="nav-dropdown-menu-body">
            <div class="row">
              <div class="col-md-3">
                <h5 class="nav-dropdown-menu__heading nav-dropdown-menu__heading--parent">
                  Manufacturing
                </h5>
                <div
                  class="nav-dropdown-menu__list"
                  style={{ paddingBottom: "20px" }}
                >
                  <p>
                      TR Formac
                  </p>
                  <p>
                    TR SFE
                  </p>
                  <p>
                    TR PSEP
                  </p>
                  <p>
                    TR VIC
                  </p>
                  <p>
                    pcences
                  </p>
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
                  <p>
                      Supply chain optimisation
                  </p>
                  <p>
                      Supply chain solutions
                  </p>
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
                  <p>
                      Product pne card
                  </p>
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
          </div> */}

          {/* <div class="nav-dropdown-menu-body">
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
          </div> */}

          {/* <div class="nav-dropdown-menu-body">
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
          </div> */}

          {/* <div class="nav-dropdown-menu-body">
            <div class="row">
              <div class="col-md-3">
                <h5 class="nav-dropdown-menu__heading">
                  Contact
                </h5>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
