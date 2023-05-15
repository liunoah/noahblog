import React, { useState,useEffect  } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import './Comment.css'
import { toast } from 'react-toastify';
import Api from '../tools/Api';
import TimeFormat from '../tools/TimeFormat';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

function List(props) {
  const [showList, setShowList] = useState(false);
  const [data, setData] = useState([]);

  const addDataToList = (newData) => {
    setData((data) => [...data, ...newData]);
    console.log(data);
  };
  const [commentNum, setCommentNum] = useState(0)
  const [comment, setComment] = useState("");
  const [name, setName] = useState("")

  //展开评论,关闭评论
  const  handleClick = async () => {
    setShowList(!showList);
    console.log(comment, name);
    const res = await Api.get("comments/" + props.articleId)
    setData(res.blogs)
  }
  

  //发布评论
  const handleSubmit = async () => {

    const body = {
      name: localStorage.getItem('nickname') ,
      comment: comment,
      article_id:props.articleId
    };
    const res = await Api.post("comments/",body)
    console.log(res);
    const newData = [{
      article_id: props.articleId,
      comment: comment,
      created_at: new Date(),
      id : res.data.insertId,
      name : localStorage.getItem('nickname'),
      updated_at: new Date(),
    }]
    addDataToList(newData)
    setCommentNum(commentNum + 1)
    // alert("comment success")
    setComment("")
    
  };
  
  
  //获取评论数量
  useEffect(() => {
    
    async function fetchData() {
      // console.log(props.articleId);
      const response = await Api.get("comments/count/" + props.articleId)
      // console.log(response);
      if (!props.isVisible) 
        handleClick()
      
      setCommentNum(response.sum)
    }
    fetchData();
  }, []);

  //检测评论列表

  return (
    <div>
      <EvilIcons className="commit_button" onClick={handleClick} name="comment" color="gray" >{showList ? "收起评论" : commentNum ? commentNum + '条评论' : "新增评论"}</EvilIcons>

      {showList && (
        <div>
          
          <ul className="no-bullet">
            {data.map(item => (
              <li  key={item.id}>    
                  <div  className='name_p'>{item.name} 说:</div> 
                <div className='list_p'>{item.comment}</div>
                <div className='comment_list_date'>{TimeFormat(item.updated_at)}</div>
                </li>
            ))}
          </ul>
          <div style={styles.comment_div}>
          <textarea onSubmit={handleSubmit} value={comment} style={styles.input} onChange={(event) => setComment(event.target.value)} placeholder="评论千万条,友善第一条" />
          <button className='comment_button' onClick={handleSubmit} >提交</button>
          </div>
        </div>

      )}
    </div>
  );
}
const styles={
  input:{
    border: '1px solid rgb(235, 236, 240)',
    borderRadius: '10px',
    marginLeft: '15px',
    width: '740px',
    height: '50px',
    maxWidth: '700px',
    lineHeight:  "20px",
    padding: '10px',
    outline: 'none',
    maxHeight: "500px",
    resize: 'none'
  },
  comment_div:{
    display:"flex",
    alignItems: "flex-end"
  }
}
export default List;