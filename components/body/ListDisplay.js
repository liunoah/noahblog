import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const ListDisplay = ({ dataList }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.text}</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ListDisplay;