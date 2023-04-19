import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const DATA = [];
for(let i = 1; i <= 200; i++) {
  DATA.push({
    id: String(i),
    title: `Item ${i}`,
    text: '我今天真高兴'
  });
}

export default function App() {
  const [isGrid, setIsGrid] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const newData = DATA.slice((page - 1) * 10, page * 10);
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 1000);
  };

  const renderItem = ({ item }) => {
    if (isGrid) {
      return (
        <TouchableOpacity style={styles.gridItem}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.text}</ListItem.Subtitle>
          </ListItem.Content>
        </TouchableOpacity>
      );
    } else {
      return (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.text}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    }
  };

  const renderFooter = () => {
    if (isLoading) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreData}>
        <Icon name="arrow-down" type="font-awesome-5" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsGrid((prevIsGrid) => !prevIsGrid)}>
        <Icon name={isGrid ? 'list' : 'grid'} type="font-awesome-5" />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        key={isGrid ? 'grid' : 'list'}
        numColumns={isGrid ? 2 : 1}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadMoreButton: {
    alignSelf: 'center',
    padding: 16
  }
});