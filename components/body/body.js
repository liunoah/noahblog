import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MD from '../tools/markdown/Markdown'
const Pagination = ({ page, setPage }) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleJump = () => {
    // TODO: 实现跳转逻辑
  };

  return (
    <View style={styles.pagination}>
      <TouchableOpacity onPress={handlePrevious}>
        <Text style={styles.pageLink}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.pageNumber}>{page}</Text>
      <TouchableOpacity onPress={handleNext}>
        <Text style={styles.pageLink}>{'>'}</Text>
      </TouchableOpacity>
      <View style={styles.pageInputContainer}>
        <Text>跳至</Text>
        <TextInput style={styles.pageInput} onChangeText={setPage} value={String(page)} />
        <TouchableOpacity onPress={handleJump}>
          <Text style={styles.pageLink}>跳转</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const List = ({ data, isGrid }) => {
  const renderItem = ({ item }) => {
    if (isGrid) {
      return (
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>
            <MD markdown={item.title} /></Text>
          <Text style={styles.gridText}> <MD markdown={item.text} /></Text>
        </View>
      );
    } else {
      return (
        <View style={styles.listItem}>
          <MD markdown={item.title} />

          <Text style={styles.listText}> <MD markdown={item.text} /></Text>
        </View>
      );
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      key={isGrid ? 'grid' : 'list'}
      numColumns={isGrid ? 2 : 1}
    />
  );
};

const Page = () => {
  const [isGrid, setIsGrid] = useState(false);
  const [page, setPage] = useState(1);

  const DATA = [];

  for (let i = 1; i <= 500; i++) {
    DATA.push({
      id: String(i),
      title: `## Item ${i}`,
      text: '我今天as我今天as真高我今天as真高我今天a我今天as真高我今天as真高我今天as真高我今天as真高我今天as真高我今天as真高我今天as真高s真高我今天as真高我今天as真高我今天as真高我今天as真高真高',
    });
  }

  const startIndex = (page - 1) * 20;
  const endIndex = startIndex + 20;
  const data = DATA.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsGrid(!isGrid)}>
          <Ionicons name={isGrid ? "ios-list" : "ios-grid"} size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <List data={data} isGrid={isGrid} />
      </View>
      <View style={styles.footer}>
        <Pagination page={page} setPage={setPage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingLeft: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageLink: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  pageNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  pageInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginLeft: 5,
    width: 50,
  },
  listItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 0,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listText: {
    fontSize: 16,
  },
  gridItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
    padding: 5,
    alignItems: 'center',
  },
  gridTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gridText: {
    fontSize: 16,
  },
});

export default Page;
