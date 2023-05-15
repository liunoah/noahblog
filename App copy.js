import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Body from "./components/body/Body"
import Newpost from './components/newpost/Newpost';
import Admin from './components/admin/AdminLogin'
import ArticleDetail from "./components/ArticleDtail/ArticleDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/newpost" element={<Newpost />} />
        <Route path="/admin/login" element={<Admin />} />
        <Route path="/detail/:articleId" element={<ArticleDetail />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
