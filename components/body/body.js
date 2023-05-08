import React, { useState ,useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListDisplay from './ListDisplay';
import Head from '../head/head'
import api  from '../tools/Api';
export default function Body() {
  
  const [dataList, setDataList] = useState([{}]);
  const addDataToList = (newData) => {
    setDataList((prevDataList) => [...prevDataList, ...newData]);
    console.log(dataList);
  };
  
  useEffect(() => {
    
    async function fetchData() {
      const response = await api.get("")
      // setDataList(response.blogs)
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(dataList);
  }, [dataList]);

  return (
    <SafeAreaView style={styles.container}>
      <Head onAddData = {addDataToList} setDataList = {setDataList}  />
      <ListDisplay dataList={dataList} />
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "rgb(255, 255, 255)",
  },
});