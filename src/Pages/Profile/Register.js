import React from "react";
import "../Profile/Register.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Register = () => {
  return (
    <div className="form-container">
      <Navbar></Navbar>
      <div className="signin-form">
        <h3 className="form-title">Register</h3>
        <Form>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="label">
              Name<sup>*</sup>
            </Form.Label>
            <Form.Control className="text-field" type="text" placeholder="" />
          </Form.Group>
          <Form.Label className="label">
              Country<sup>*</sup>
            </Form.Label>
          <Form.Select aria-label="Default select example" size="sm" className="text-field">
            <option>Select Country</option>
            <option value="1">India</option>
            <option value="2">America</option>
            <option value="3">Japan</option>
          </Form.Select>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="label">
              Company<sup>*</sup>
            </Form.Label>
            <Form.Control className="text-field" type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="label">
              Email<sup>*</sup>
            </Form.Label>
            <Form.Control className="text-field" type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="label">
              Phone Number<sup>*</sup>
            </Form.Label>
            <Form.Control className="text-field" type="tel" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="label">
              Password<sup>*</sup>
            </Form.Label>

            <Form.Control
              className="text-field"
              type="password"
              placeholder=""
            />
            <p>
              Must contain numbers, uppercase and lowercase letters, and be at
              least 12 characters.
            </p>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="label">
              Confirm Password<sup>*</sup>
            </Form.Label>
            <Form.Control
              className="text-field"
              type="password"
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Label className="label">
                  Enable two-factor authorisation?
                </Form.Label>
                <Form.Check
                  className="label"
                  label="Yes"
                  inline
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="label"
                  label="No"
                  inline
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <p>NOTE: Two-factor authentication is done via SMS text.</p>
              </div>
            ))}
          </Form.Group>
         

          
            <Form.Check
                className="terms-and-condition"
              name="group1"
              type="checkbox"
              inline
              label={ <p>
      I confirm I have read and agree to the
      <a href=""> Terms and Conditions of Use of www.trfastenings.com </a>
      and <a href="">Privacy Policy</a>
    </p>}
            />
          <Button
              as="input"
              type="submit"
              value="Register"
              className="submit-btn register-btn"
            />{" "}
        </Form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
