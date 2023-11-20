import React from 'react';
import Landing from './Pages/Landing/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Industries from './Pages/Industries/Industries';
import Services from './Pages/Services/Services';
import Knowledge from './Pages/Knowledge/Knowledge';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/company' element={<Landing/>}/>
          <Route path='/investors' element={<Landing/>}/>
          <Route path='/products' element={<Landing/>}/>
          <Route path='/knowledge-base' element={<Knowledge/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/industries' element={<Industries/>}/>
          <Route path='/sustainability' element={<Landing/>}/>
          <Route path='/contact' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
