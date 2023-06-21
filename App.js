import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainBody from '/components/body/MainBody'
import Newpost from '/components/newpost/Newpost';
import AdminLogin from '/components/admin/AdminLogin'
import ArticleDetail from "/components/ArticleDtail/ArticleDetail";
import Admin from '/components/admin/AdminPage';
import Update from '/components/newpost/Update';
import H5Body from '/components/body/H5Body';
import SplashScreen from '/components/start/SplashScreen';
import Blog from './components/blog/Blog'
function getBrowserInfo() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log('isMobile', isMobile);
  return isMobile;
}
const isMobile = getBrowserInfo();
const App = () => {
  function getBrowserInfo() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log('isMobile', isMobile);
    return isMobile;
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* {
          isMobile ? <Route path="/body" element={<H5Body />} /> : <Route path="/" element={<MainBody />} />
        } */}
        <Route path="/body" element={<MainBody />} />
        <Route path="/newpost" element={<Newpost />} />
          
        <Route path="/edit/:articleId" element={<Update />} />
        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:articleId" element={<ArticleDetail />} />
        {
          isMobile ? <Route path="/" element={<H5Body />} /> : <Route path="/" element={<SplashScreen />} />
        }
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
