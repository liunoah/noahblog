import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import MD from '../tools/markdown/Markdown'
import Comment from './Comment'
import TimeFormat from '../tools/TimeFormat';
import { Link } from 'react-router-dom';
const ListDisplay = ({ dataList }) => {
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Link style={styles.link} to={`/detail/${item.id}`}>
        <Text   style={styles.title}>{item.title}  </Text>
      </Link>
      <Text style={styles.date} className="comment_list_date">{TimeFormat(item.updated_at)}</Text>

      <Text style={styles.text}>
        {/* <MD markdown={item.text} /> */}

      </Text>
      {/* {item.id && <Comment articleId={item.id} isVisible={true} />} */}
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
    width: '900px',
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
  link: {
    textDecorationLine: 'none'
  },
  text:{
    overflow: 'scroll'

  }
});

export default ListDisplay;