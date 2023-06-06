import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Comment from './Comment'
import TimeFormat from '../tools/TimeFormat';
import { Link } from 'react-router-dom';
import Article from './Article';
import Api from '/components/tools/Api';
import Toast from '../tools/Toast';
function getBrowserInfo() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log('isMobile', isMobile);
  return isMobile;
}
const isMobile = getBrowserInfo();
const ListDisplay = ({ dataList,removeElement }) => {
  const [isText, setIsText] = useState("展开文章")
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"))
  // 删除文章 
  const handleDelete = (articleiD) =>{
    async function fetchData() {
      const response = await Api.delete(articleiD)
      console.log(response);
      removeElement(articleiD)
      Toast.success("删除文章成功")

    }
    if (confirm('确认删除？')) {
      fetchData()
    } else {
    }
  }
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/*  admin用户展示删除 修改 按钮 */}
      {/* 普通用户,只展示标题 */}
      {
        !isAdmin ?
          <Link style={styles.link} to={`/detail/${item.id}`}>
            <Text style={styles.title}>{item.title}
            </Text>
          </Link> :
          <div style={styles.admin} >
            <Text style={styles.admin_left}>
            <Link to={`/detail/${item.id}`}>
              <Text style={styles.title}>{item.title}</Text>
              </Link>
            </Text>
            <Text style={styles.button_div}>
              <Link to={`/edit/${item.id}`}>
                <button style={styles.button_edit}>edit</button>
              </Link>
              <button onClick={()=>{handleDelete(item.id)}} style={styles.button_delete}>delete</button>
            </Text>

          </div>
      }
      <Text style={styles.date} className="comment_list_date">{TimeFormat(item.created_at)}</Text>
      <Article text={item.text} />
      {item.id && <Comment articleId={item.id} isVisible={true} />}
    </View>
  );

  return (

    <FlatList
      data={dataList}
      renderItem={renderItem}
      keyExtractor={item => item.id + 1}
    />

  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: 20,
    marginVertical: 8,
    width: isMobile ? "100%" : "900px",
    margin: 'auto',
    border: '1px solid rgb(240, 242, 247)',
    borderRadius: '5px',
  },
  title: {
    fontSize: 20,
    color: "rgb(74, 135, 242)",
    fontWeight: 'bolder',
    width: "400px"


  },
  date: {
    color: "rgb(133, 143, 165)",
    fontSize: 12,
    textAlign: "right"
  },
  isText: {
    color: "rgb(133, 143, 165)",
    fontSize: 12,
    whiteSpace: 'nowrap',

    width: '100px'
  },
  link: {
    textDecorationLine: 'none'
  },
  button_div: {
    marginLeft: "auto"
  },
  text: {
    overflow: 'scroll'
  },
  button_edit: {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '4px',
    padding: '5px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '8px',
    width: '60px'

  },
  button_delete: {
    backgroundColor: '#f44336',
    color: 'white',
    borderRadius: '4px',
    padding: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '60px'
  },
  admin: {
    "display": "flex",
    "flexDirection": "row"
  },
  admin_left: {
    marginRight: 'auto'
  }
});

export default ListDisplay;