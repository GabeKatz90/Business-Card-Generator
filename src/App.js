import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <HomePage />
      
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;