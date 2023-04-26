import styled from 'styled-components';
import ReactQuill from 'react-quill';

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-bottom: 2px solid #ccc;
`;

export const Editor = styled(ReactQuill)`
  width: 100%;
  margin: 20px 0;
  font-size: 18px;
  height:70%;

  .ql-editor {
    min-height: 300px;
  }
  // 将操作栏固定在顶部
  .ql-container {
    height: 700px; 
    
  }
`;

export const PublishButtonsContainer = styled.div`
  display: flex ;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const PublishButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  width: 120px;

  &:hover {
    background-color: #0062cc;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width 100%;
  margin-top: 30px;
`;