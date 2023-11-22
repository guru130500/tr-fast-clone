import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ForgotPass = () => {
  return (
    <div className="form-container">
      <Navbar></Navbar>
      <div className="signin-form">
        <h3 className="form-title">Forgot your password?</h3>
        <Form>
          <p style={{margin:"1rem 0 0 0" , fontSize:"1rem"}}>
            Just enter your email address below and click the email link button
            and we will send you an email with a link for you to reset your
            password
          </p>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label className="label">
              Email
            </Form.Label>
            <Form.Control className="text-field" type="email" placeholder="" />
          </Form.Group>
          <Button as="input" type="submit" value="Email Link"  className='submit-btn'/>{' '}
        </Form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ForgotPass;
