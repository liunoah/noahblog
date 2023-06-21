import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { EditorContainer, TitleInput, Editor, PublishButtonsContainer, PublishButton, ButtonWrapper } from './NewPostStrys';
import Api from '/components/tools/Api';
import modules from './modules';
import generatePoem from '../tools/Poem';
import Head from '../head/head'
import { set } from 'lodash';
import { StyleSheet, Text } from 'react-native';

const Update = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { articleId } = useParams();
  const [hide, setHide] = useState(false);

  const history = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await Api.get(articleId)
      console.log(response);
      setTitle(response.title)
      setText(response.text)
      setHide(response.hide)
    }
    function getLocalData(){
      const savedDataString = localStorage.getItem('updateData' + articleId);
      const savedData = savedDataString ? JSON.parse(savedDataString) : {};
      setTitle(savedData.title || '');
      setText(savedData.text || '');
      setHide(savedData.hide || false);
    }
    console.log();
    if (localStorage.getItem('updateData' + articleId)) {
      getLocalData()
    }else{
      fetchData()
    }
  }, []);

  useEffect(() => {
    const data = {
      title,
      text,
      hide,
    };
    localStorage.setItem('updateData' + articleId, JSON.stringify(data));
    console.log(localStorage.getItem('updateData' + articleId, JSON.stringify(data)));
    console.log("存储成功");
    
  }, [title, text, hide]);

  const handlePublish = async () => {
    // do something with the title and text data, such as publishing to a blog
    // console.log(`Title: ${title}\nText: ${text}`);

    const body = {
      title: title,
      text: text,
      name: localStorage.getItem('nickname'),
      ip : "1.1.1.1",
      hide : hide
    };
    if (title == "") {
      body.title = generatePoem()
    }
    // handleClear()
    const res = await Api.put("" + articleId, body)
    console.log(res);
    alert("update success")
    history('/body')

  };
  const handleClear = async () => {
    setText("")
    setTitle("")
    localStorage.setItem('updateData' + articleId, "");
    localStorage.removeItem('updateData' + articleId)

  };
  const handelHide = () => {
    setHide(!hide)
  }
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
        <Text style={styles.hideText}>是否隐藏</Text>
        <input checked={hide} onChange={handelHide} style={styles.hide}   type="checkbox"></input>
          <Link to="/"><PublishButton >返回主页</PublishButton></Link>
          <Link><PublishButton onClick={handlePublish} >更新</PublishButton></Link>
          {/* <PublishButton onClick={handleClear}>clear</PublishButton> */}

        </ButtonWrapper>
      </PublishButtonsContainer>
    </EditorContainer>
  );
};

const styles = StyleSheet.create({
  hide: {
    marginRight: "65%",
    width: 23,
    height: 23,
    borderRadius: 24,
    borderColor: 'rgb(235, 236, 240)',
    borderWidth: 1,
  },
  hideText: {
    fontSize: 18,
  }
});
export default Update;