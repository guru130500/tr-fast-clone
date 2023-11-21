import React from 'react';
import './People.css';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";


const People = () => {
  return (
    <div className='PeopleBody'>

      <div className="People-div-card"
      style={{background:'#002b80'}}
      >
        <div className="People-left-ImgDiv">
          <article>
            <ArrowOutwardIcon style={{ color: "#1a7abf" }} />
          </article>
          <img src="https://trfastenings.blob.core.windows.net/sitecontent/ea7ec85c35e347f0b2ed578c221f6ec3.jpg" />
        </div>
        <div className="PeopleTextContent"
        style={{width:'100%', margin:'10px 0px 0px 0px'}}
        >
          <h6>PEOPLE</h6>
          <hr />
          <h2>Create socio-economic value</h2>
          <p>
            Trifast is proud to be a people-centred business and focused on being a responsible and responsive employer. We promote an environment that is safe and fair, which motivates, develops, and maximises the contribution and potential of all employees globally.
          </p>
          <br />
          <button>Read More</button>
        </div>
      </div>

      <div className="People-div-card"
      style={{background:'orange'}}
      >
        <div className="People-left-ImgDiv">
          <article>
            <ArrowOutwardIcon style={{ color: "orange" }} />
          </article>
          <img src="https://trfastenings.blob.core.windows.net/sitecontent/ecc0c6cceb3a4c81bd2b6511d40ad726.jpg" />
        </div>
        <div className="PeopleTextContent"
        style={{width:'100%', margin:'10px 0px 0px 0px'}}
        >
          <h6>PEOPLE</h6>
          <hr />
          <h2>Create socio-economic value</h2>
          <p>
            Trifast is proud to be a people-centred business and focused on being a responsible and responsive employer. We promote an environment that is safe and fair, which motivates, develops, and maximises the contribution and potential of all employees globally.
          </p>
          <br />
          <button>Read More</button>
        </div>
      </div>

      <div className="People-div-card"
      style={{background:'#642682'}}
      >
        <div className="People-left-ImgDiv">
          <article>
            <ArrowOutwardIcon style={{ color: "#642682" }} />
          </article>
          <img src="https://trfastenings.blob.core.windows.net/sitecontent/70a522c729824e89b5ef65f7e1931597.jpg" />
        </div>
        <div className="PeopleTextContent"
        style={{width:'100%', margin:'10px 0px 0px 0px'}}
        >
          <h6>PEOPLE</h6>
          <hr />
          <h2>Create socio-economic value</h2>
          <p>
            Trifast is proud to be a people-centred business and focused on being a responsible and responsive employer. We promote an environment that is safe and fair, which motivates, develops, and maximises the contribution and potential of all employees globally.
          </p>
          <br />
          <button>Read More</button>
        </div>
      </div>

      <div className="People-div-card"
      style={{background:'#002b80'}}
      >
        <div className="People-left-ImgDiv">
          <article>
            <ArrowOutwardIcon style={{ color: "#1a7abf" }} />
          </article>
          <img src="https://trfastenings.blob.core.windows.net/sitecontent/ae7625eb5b0f448486354df5b8272982.jpg" />
        </div>
        <div className="PeopleTextContent"
        style={{width:'100%', margin:'10px 0px 0px 0px'}}
        >
          <h6>PEOPLE</h6>
          <hr />
          <h2>Create socio-economic value</h2>
          <p>
            Trifast is proud to be a people-centred business and focused on being a responsible and responsive employer. We promote an environment that is safe and fair, which motivates, develops, and maximises the contribution and potential of all employees globally.
          </p>
          <br />
          <button>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default People
