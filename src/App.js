import React from 'react';
import Landing from './Pages/Landing/Landing';
import Company from './Pages/Company/Company'
import Investor from './Pages/Investor/Investor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Industries from './Pages/Industries/Industries';
import Services from './Pages/Services/Services';
import Knowledge from './Pages/Knowledge/Knowledge';
import Products from './Pages/Products/Products';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/investor' element={<Investor/>}/>
   
          <Route path='/knowledge-base' element={<Knowledge/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/industries' element={<Industries/>}/>
          <Route path='/sustainability' element={<Landing/>}/>
          <Route path='/contact' element={<Landing/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
