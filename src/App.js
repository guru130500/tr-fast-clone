import React from 'react';
import Landing from './Pages/Landing/Landing';
import Company from './Pages/Company/Company'
import Investor from './Pages/Investor/Investor';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Landing/>}/>
        <Route path="/company"  element={<Company/>}/>
        <Route path="/investor"  element={<Investor/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
