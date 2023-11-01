import './App.css';
import Navbar from './container/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './container/Home';
import React  from 'react';
import Contact from './container/Contact';
import Support from './container/Support';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/support" element={<Support/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
