import React from 'react'
import "../Profile/SignIn.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='form-container'>
      <Navbar></Navbar>
      <div className='signin-form'>
      <h3 className='form-title'>Sign In</h3>
      <Form>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
        <Form.Label className='label'>Email<sup>*</sup></Form.Label>
        <Form.Control className='text-field' type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label className='label'>Password<sup>*</sup></Form.Label>
        <Form.Control className='text-field' type="password" placeholder="" />
      </Form.Group>
      <div className='wrapper'>
      <Button as="input" type="submit" value="Sign in"  className='submit-btn'/>{' '}
      <Link className='form-link' to={"/forgot-password"}>Forgot your Password?</Link>
      <Link to="/register" className='form-link'>Register as a new user?</Link>

      </div>
    </Form>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default SignIn
