import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { EditorContainer, TitleInput, Editor, PublishButtonsContainer, PublishButton, ButtonWrapper } from './NewPostStrys';
import Api from '../tools/Api';
import modules from './modules';
import generatePoem from '../tools/Poem';
import Head from '../head/head'

const Update = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { articleId } = useParams();

  const history = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await Api.get(articleId)
      console.log(response);
      setTitle(response.title)
      setText(response.text)
    }
    fetchData()
    // const savedDataString = localStorage.getItem('blogEditorData');
    // const savedData = savedDataString ? JSON.parse(savedDataString) : {};
    // console.log("saveData",localStorage.getItem('blogEditorData'));
    // setTitle(savedData.title || '');
    // setText(savedData.text || '');
  }, []);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   const data = {
    //     title,
    //     text,
    //   };
    //   localStorage.setItem('blogEditorData', JSON.stringify(data));
    //   console.log(localStorage.getItem('blogEditorData', JSON.stringify(data)));
    //   console.log("存储成功");
    //   console.log(data);
    // }, 1000);

    // return () => clearInterval(interval);
    const data = {
      title,
      text,
    };
    localStorage.setItem('blogEditorData', JSON.stringify(data));
    console.log(localStorage.getItem('blogEditorData', JSON.stringify(data)));
    console.log("存储成功");
    
  }, [title, text]);

  const handlePublish = async () => {
    // do something with the title and text data, such as publishing to a blog
    console.log(`Title: ${title}\nText: ${text}`);

    const body = {
      title: title,
      text: text,
    };
    if (title == "") {
      body.title = generatePoem()
    }
    handleClear()
    const res = await Api.put("" + articleId, body)
    console.log(res);
    // localStorage.setItem('blogEditorData', "");
    // localStorage.removeItem('blogEditorData')
    alert("update success")
    history('/')

  };
  const handleClear = async () => {
    setText("")
    setTitle("")
    localStorage.setItem('blogEditorData', "");
    localStorage.removeItem('blogEditorData')

  };

  //看门狗,没有写...
  return (
    <EditorContainer>
      <TitleInput
        type="text"
        placeholder="Enter your blog title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Editor modules={modules.modules} formats={modules.formats} value={text} onChange={(value) => setText(value)} />
      <PublishButtonsContainer>
        <ButtonWrapper>
          <Link to="/"><PublishButton >返回主页</PublishButton></Link>
          <Link><PublishButton onClick={handlePublish} >更新</PublishButton></Link>
          {/* <PublishButton onClick={handleClear}>clear</PublishButton> */}

        </ButtonWrapper>
      </PublishButtonsContainer>
    </EditorContainer>
  );
};

export default Update;