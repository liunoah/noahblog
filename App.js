import Body from "./components/body/Body"
import Newpost from './components/newpost/Newpost';
import Admin from './components/admin/Admin'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/copy-to-clipboard'
import './assets/copy-to-clipboard.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/admin" element={<Admin />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
