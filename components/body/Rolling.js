import React, { useEffect, useState, useRef } from "react";
import Api from '/components/tools/Api';

function ScrollDetector(props) {
  const [pageStatus, setPageStatus] = useState("homepage");
  const previousSearchTextRef = useRef("");

  let page = 1;

  const handleAddData = async (test) => {
    let newData = [];
    if (test) {
      // 如果 searchText 没有改变，或者为空字符串，则使用默认的 api.get("?page=" + ++page) 请求数据
      newData = await api.get("?page=" + ++page);
      newData = newData.blogs;
    } else {
      // 否则，使用带有搜索文本的 api.get 请求数据
      newData = await api.get("search/" + props.searchText + "?page=" + ++page);
      newData = newData.blogs;
    }
    props.onAddData(newData);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= pageHeight - windowHeight) {
      console.log("You have reached the bottom of the page");
      console.log(props.searchText);
      console.log(props.searchText === "");
      handleAddData(props.searchText === "");
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