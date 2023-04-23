import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Social/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route exact path='/Skills' element={<Skills/>}/>
        <Route exact path='/Projects' element={<Projects/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
