import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import MD from '../tools/markdown/Markdown'

const ListDisplay = ({ dataList }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
       <MD markdown={item.title} />
      </Text>
      <Text>        <MD markdown={item.text} />
      </Text>
    </View>
  );

  return (
    <FlatList
      data={dataList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: 20,
    marginVertical: 8,
    width: '80%',
    margin:'auto'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bolder',
    margin: 'auto'
    
  },
});

export default ListDisplay;