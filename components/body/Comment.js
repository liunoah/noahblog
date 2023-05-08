import React, { useState,useEffect  } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import './Comment.css'
import { toast } from 'react-toastify';
import toastSummit from '../tools/toastSummit';
import Api from '../tools/Api';
import TimeFormat from '../tools/TimeFormat';

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
  //测试使用

  const test = (value) => 
  {
    console.log(value);
    toastSummit()
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
      console.log(props.articleId);
      const response = await Api.get("comments/count/" + props.articleId)
      console.log(response);

      setCommentNum(response.sum)
    }
    fetchData();
  }, []);
  const getCountCommentByArticleId = () => {
    async function fetchData() {
      const response = await Api.get("search/" + searchText);
      // props.setDataList(response.blogs);
    }
    fetchData();
  }
  return (
    <div>
      <EvilIcons className="commit_button" onClick={handleClick} name="comment" color="gray" >{showList ? "收起评论" : commentNum ? commentNum + '条评论' : "新增评论"}</EvilIcons>

      {showList && (
        <div>
          
          <ul className="no-bullet">
            {data.map(item => (
              <li  key={item.id}>    
                  <div className='name_p'>{item.name}  {TimeFormat(item.updated_at)}</div> 
                <div className='list_p'>{item.comment}</div>
                </li>
            ))}
          </ul>
          <div>
          <input value={comment} className='comment_input' onChange={(event) => setComment(event.target.value)} placeholder="评论千万条,友善第一条" />
          <button className='css-zkfaav' onClick={handleSubmit} >提交</button>
          </div>
        </div>

      )}
    </div>
  );
}

export default List;