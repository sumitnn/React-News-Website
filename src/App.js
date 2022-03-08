import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="*" element={"Not found"} />
      </Routes>

      
    </BrowserRouter>
      
       
  );
}

export default App;
