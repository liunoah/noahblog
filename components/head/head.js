import React,{useEffect,useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScrollDetector from '../body/Rolling';
import { Link } from 'react-router-dom';
import api from '../tools/Api';
import { alignCenter } from 'fontawesome';
import { AntDesign } from '@expo/vector-icons';
import RandomNickname from '../tools/RandomNickname';


export default function Header(props) {
  const [searchText,setSearchText] = useState("")
  const [nickname,setNickname] = useState("")
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  
  function handleLogo() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    const savedDataString = localStorage.getItem('nickname');
    const savedData = savedDataString ? savedDataString : RandomNickname();
    setNickname(savedData)
    localStorage.setItem('nickname', savedData);
    if (!searchText)  {
      async function fetchData() {
        const response = await api.get("")
        props.setDataList(response.blogs)
        localStorage.setItem('blogs', JSON.stringify(response.blogs));
      }
      fetchData();
    }
    

  }, [searchText]);
 const handleSubmit = () => {
    if (searchText)
      handleSearch()
  };
  function handleSearch(event) {
    async function fetchData() {
      const response = await api.get("search/" + searchText);
      props.setDataList(response.blogs);
      
    }
    fetchData();
  }
  const handleNickname = ()=>{
    localStorage.setItem('nickname', nickname);
  }
  useEffect(() => {
    localStorage.setItem('nickname', nickname);
  }, [nickname]);
  return (
    <View style={styles.outerContainer}>
      <ScrollDetector onAddData = {props.onAddData} searchText={searchText}  />
      <View style={styles.container}>
        <View style={styles.header}>
        <Link to="/">
        <TouchableOpacity>
      <Image style={styles.img} source={require('../../assets/favicon.png')} />
    </TouchableOpacity>
                    </Link>
          <TouchableOpacity style={styles.button}>
        <Link to="/newpost"><Ionicons name="create-outline" size={24} color="rgb(52, 55, 63)" /></Link>
            
          </TouchableOpacity>
          <TextInput value={searchText}  onChange={handleInputChange} style={styles.input} placeholder="Search" onSubmitEditing={handleSubmit} />

          <AntDesign name="search1" size={24} color="black" onPress={handleSearch} />
          <div style={styles.div_nickname} >昵称:</div>
          <TextInput placeholder="nickname" onChange={(event) => setNickname(event.target.value)} value={nickname}  style={styles.input_nickname} onSubmitEditing={handleNickname} />

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
    margin:'auto',
    alignItems: 'center', 
    border: "rgb(240, 242, 247) solid 1px",
    position: 'fixed', top: '0%', left: '50%', transform: 'translate(-50%, -0%)' ,
    zIndex:99,
    // top: 0,
  },
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '98%',
    float:alignCenter
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
    width: 200,
    
    
  },
  input_nickname: {
    backgroundColor: 'rgb(235, 236, 240)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    width: 100,
  },
  div_nickname: {
    paddingLeft: "10px",
    fontSize: "14px"
  },
  img :{
    width: "60px",
    position: 'relative' ,
    height: '50px'
  }
});
