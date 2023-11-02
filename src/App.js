import './App.css';
import Navbar from './container/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './container/Home';
import React  from 'react';
import Contact from './container/Contact';
import Support from './container/Support';
import Post from './container/Post';

function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route  path="/:post_id" element={<Post/>}/>
        <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
