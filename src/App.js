import React from 'react';
import './index.css';
import {Routes, Route} from "react-router-dom"
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';



function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
