import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ListDisplay from './ListDisplay';
import HeadH5 from '../head/HeadH5'
import api from '/components/tools/Api';
import Loading from '../tools/loading';
import { ToastContainer, toast } from 'react-toastify';


// import 'react-toastify/dist/ReactToastify.css';
 function MainBody() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOnButtom, setIsLoadingOnButtom] = useState(true);
  
  const removeElement = (id) => {
    const newData = dataList.filter(item => item.id !== id);
    setDataList(newData);
  };

  const addDataToList = (newData) => {
    setDataList((prevDataList) => [...prevDataList, ...newData]);
    if (newData.length > 0) {
      console.log('Loading on bottom is shown.');
      setIsLoadingOnButtom(false);
    }else{
      setIsLoadingOnButtom(true);
    }
  };

    
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('');
      setDataList(response.blogs);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log('DataList has been updated:', dataList);
  }, [dataList]);

  return (
    <SafeAreaView style={styles.container}>
      <ToastContainer  />
      <HeadH5 onAddData={addDataToList} setDataList={setDataList} />
      {isLoading ? (
        <Loading />
      ) : (
        <ListDisplay dataList={dataList} removeElement={removeElement} />
      )}
      {isLoadingOnButtom ? <View style={styles.loading} /> : <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    marginTop: '85px',
  },
  loading: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MainBody