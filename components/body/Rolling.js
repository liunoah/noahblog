import React, { useEffect, useState, useRef } from "react";
import Api from '../tools/Api';
import { useLocation } from 'react-router-dom';

function ScrollDetector(props) {
  const previousSearchTextRef = useRef("");

  let page = 1;
  const handleAddData = async () => {
    async function fetchData() {
      try{
        const response = await Api.get(localStorage.getItem('url') + "?page=" + ++page);
        props.onAddData(response.blogs);
      }catch(e){
        console.log(e);
        Toast.error(e.message)
      }
    }
    fetchData();
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= pageHeight - windowHeight) {
      console.log("You have reached the bottom of the page");
      console.log(location.pathname);
      if (location.pathname == '/body' || location.pathname == '/body/')    
        handleAddData();

    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.searchText]);

  useEffect(() => {
    previousSearchTextRef.current = props.searchText;
  }, [props.searchText]);

  return null; // 如果你想使用 ScrollDetector 组件，你需要在这里返回一些 JSX
}

export default ScrollDetector;