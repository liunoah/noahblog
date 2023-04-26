import Body from "./components/body/Body"
import Newpost from './components/newpost/Newpost';
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
