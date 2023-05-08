import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import MD from '../tools/markdown/Markdown'
import Comment from './Comment'
import TimeFormat from '../tools/TimeFormat';


const ListDisplay = ({ dataList }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {/* <MD markdown={item.title} /> */}
        {item.title}     {TimeFormat(item.updated_at)}
      </Text>
      <Text>
        <MD markdown={item.text} />

      </Text>
      {item.id && <Comment articleId={item.id} />}
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
    width: '80%',
    margin: 'auto',
    border: '1px solid rgb(240, 242, 247)',
    borderRadius: '5px'
  },
  title: {
    fontSize: 20,
    color: "rgb(74, 135, 242)",
    fontWeight: 'bolder',


  },
  date: {
    color: "rgb(133, 143, 165)",
    fontSize: 12,
  }
});

export default ListDisplay;