import React, { useState ,useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListDisplay from '../body/ListDisplay';
import Head from '../head/head'
import api  from '../tools/Api';
import Loading from '../tools/loading';


export default function Body() {
  const [dataList, setDataList] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOnButtom, setIsLoadingOnButtom] = useState(true)
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
        <ListDisplay dataList={dataList} />
        
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