import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
`;

const TitleInput = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-bottom: 2px solid #ccc;
`;

const Editor = styled(ReactQuill)`
  width: 100%;
  margin: 20px 0;
  font-size: 18px;

  .ql-editor {
    min-height: 300px;
  }
`;

const PublishButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`;

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('blogEditorData')) || {};
    setTitle(savedData.title || '');
    setText(savedData.text || '');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = {
        title,
        text,
      };
      localStorage.setItem('blogEditorData', JSON.stringify(data));
    }, 5000);

    return () => clearInterval(interval);
  }, [title, text]);

  const handlePublish = () => {
    // do something with the title and text data, such as publishing to a blog
    console.log(`Title: ${title}\nText: ${text}`);
    localStorage.removeItem('blogEditorData');
  };

  return (
    <EditorContainer>
      <TitleInput
        type="text"
        placeholder="Enter your blog title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Editor value={text} onChange={setText} />
      <PublishButton onClick={handlePublish}>Publish</PublishButton>
    </EditorContainer>
  );
};

export default BlogEditor;