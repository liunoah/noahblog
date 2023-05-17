import React, { useState ,useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListDisplay from './ListDisplay';
import Head from '../head/head'
import api  from '../tools/Api';
import Loading from '../tools/loading';


export default function Body() {
  const [dataList, setDataList] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOnButtom, setIsLoadingOnButtom] = useState(true)

  // const removeElement = (index) => {
  //   // 检查索引是否有效
  //   if (index < 0 || index >= dataList.length) {
  //     throw new Error('Invalid index');
  //   }
  
  //   // 创建一个新数组
  //   const newDataList = [...dataList];
  
  //   // 删除指定索引的元素
  //   newDataList.splice(index, 1);
  
  //   // 更新状态
  //   setDataList(newDataList);
  // };
  const removeElement = (id) => {
    const newData = dataList.filter(item => item.id !== id);
    setDataList(newData);
  };
  const addDataToList = (newData) => {
    setDataList((prevDataList) => [...prevDataList, ...newData]);
    if(newData){
      console.log(111111111111111111);
      setIsLoadingOnButtom(true)
    }
    console.log(newData);
    console.log(dataList);
  };
  
  useEffect(() => {
    
    async function fetchData() {
      const response = await api.get("")
      setDataList(response.blogs)
      setIsLoading(false)
      setIsLoadingOnButtom(false)
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(dataList);
  }, [dataList]);

  return (
    <SafeAreaView style={styles.container}>
      <Head onAddData = {addDataToList} setDataList = {setDataList}  />
      {
        isLoading ?
        <Loading />  :
        <ListDisplay dataList={dataList} removeElement={removeElement} />
        
      }
      {
        isLoadingOnButtom  ? <div> </div> : <Loading />
      }
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "rgb(255, 255, 255)",
    marginTop:"85px"
  },

});