import React from 'react';
import Landing from './Pages/Landing/Landing';
import Company from './Pages/Company/Company'
import Investor from './Pages/Investor/Investor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Industries from './Pages/Industries/Industries';
import Services from './Pages/Services/Services';
import Knowledge from './Pages/Knowledge/Knowledge';
import SignIn from './Pages/Profile/SignIn';
import Register from './Pages/Profile/Register';
import ForgotPass from './Pages/Profile/ForgotPass';
import Contact from './Pages/Contact/Contact';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/investor' element={<Investor/>}/>
          <Route path='/products' element={<Landing/>}/>
          <Route path='/knowledge-base' element={<Knowledge/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/industries' element={<Industries/>}/>
          <Route path='/sustainability' element={<Landing/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={<ForgotPass/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
