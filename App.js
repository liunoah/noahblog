import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainBody from '/components/body/MainBody'
import Newpost from '/components/newpost/Newpost';
import AdminLogin from '/components/admin/AdminLogin'
import ArticleDetail from "/components/ArticleDtail/ArticleDetail";
import Admin from '/components/admin/Admin';
import Update from '/components/newpost/Update';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/newpost" element={<Newpost />} />
          
        <Route path="/edit/:articleId" element={<Update />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:articleId" element={<ArticleDetail />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
