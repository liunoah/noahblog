import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScrollDetector from '../body/Rolling';
import { Link } from 'react-router-dom';
import Api from '../tools/Api';
import { alignCenter } from 'fontawesome';
import { AntDesign } from '@expo/vector-icons';
import RandomNickname from '../tools/RandomNickname';
import Toast from '../tools/Toast';

export default function Header(props) {
  const [searchText, setSearchText] = useState("")
  const [nickname, setNickname] = useState("")
  const [checked, setChecked] = useState(localStorage.getItem('checked') == "true" ? true : false)  //是否只搜索自己的博客);

  useEffect(() => {
    let url = ""
    const tempNickname = localStorage.getItem('nickname');
    if (checked && searchText != "") {
      url = "search/" + searchText + "/" + tempNickname
    }else if (searchText != "") {
      url = "search/" + searchText
    }else if (checked) {
      url = "name/" + tempNickname
    }
    console.log("change url",url);
    localStorage.setItem('url', url);
  }, [checked, searchText]);


  function search_name() {
    async function fetchData() {
      try{
        const response = await Api.get(localStorage.getItem('url'));
        props.setDataList(response.blogs);
      }catch(e){
        console.log(e);
        Toast.error(e.message)
      }
    }
    fetchData();
  }
  //打开网页时,获取浏览器存储的nickname,如果没有则随机生成一个 check
  useEffect(() => {
    const savedDataString = localStorage.getItem('nickname');
    const savedData = savedDataString ? savedDataString : RandomNickname();
    setNickname(savedData)
    // const savedChecked = localStorage.getItem('checked');
    // const savedCheckedBool = savedChecked ? savedChecked : false;
    // setChecked({savedCheckedBool})
    console.log(localStorage.getItem('checked'));
    // setChecked(localStorage.getItem('checked'))

  }, []);
  useEffect(() => {
    search_name();
  }, [checked]);

  const handleSubmit = () => {
    if (searchText)
      search_name()
  };
  const handleNickname = () => {
    localStorage.setItem('nickname', nickname);
  }
  useEffect(() => {
    localStorage.setItem('nickname', nickname);
  }, [nickname]);
  useEffect(() => {
    console.log("checked", checked);
    localStorage.setItem("checked", checked);
  }, [checked]);
  


  function handleCheckboxChange() {
    setChecked(!checked);
  }
  return (
    <View style={styles.outerContainer}>
      
      <ScrollDetector onAddData={props.onAddData}  searchText={searchText} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Link title='liunoah' to="/body">
            <TouchableOpacity>
              <Image style={[styles.img]} source={require('../../assets/favicon.png')} />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.button}>
            <Link title='新增文章' to="/newpost"><Ionicons name="create-outline" size={24} color="rgb(52, 55, 63)" /></Link>

          </TouchableOpacity>
          <TextInput  value={searchText} onChange={event => setSearchText(event.target.value)} style={styles.input} placeholder="Search" onSubmitEditing={handleSubmit} />
          <span title='搜索'>
            <AntDesign name="search1" size={24} color="black" onPress={handleSubmit} />
          </span>
         
          <input checked={checked} onChange={handleCheckboxChange}   style={styles.div_nickname} type="checkbox"></input>
          <span title='昵称'>
          <TextInput placeholder="nickname" onChange={(event) => setNickname(event.target.value)} value={nickname} style={styles.input_nickname} onSubmitEditing={handleNickname} />
          </span>
          <Link title='登录' to="/admin/login">
            <AntDesign name="login" size={24} color="black" />

          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
    backgroundColor: 'rgb(255, 255, 255)',
    // borderRadius: 24,
    marginBottom: "20px",
    width: '900px',
    margin: 'auto',
    alignItems: 'center',
    border: "rgb(240, 242, 247) solid 1px",
    position: 'fixed', top: '0%', left: '50%', transform: 'translate(-50%, -0%)',
    zIndex: 99,
    height:70,
    // top: 0,
  },
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    float: alignCenter,
    height: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgb(235, 236, 240)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    width: 150,


  },
  input_nickname: {
    backgroundColor: 'rgb(235, 236, 240)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    width: 100,
    marginLeft: 0,
    marginRight: 20,
  },
  div_nickname: {
    width: 23,
    height: 23,
    borderRadius: 24,
    borderColor: 'rgb(235, 236, 240)',
    borderWidth: 1,
    marginHorizontal: 8,
    marginLeft: 20,

  },
  img: {
    width: "60px",
    position: 'relative',
    height: '50px'
  }
});
