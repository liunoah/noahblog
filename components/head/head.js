import React,{useEffect,useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScrollDetector from '../body/Rolling';
import api from '../tools/api';

export default function Header(props) {
  const [searchText,setSearchText] = useState("")
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  
  useEffect(() => {
    if (searchText) {
      async function fetchData() {
        const response = await api.get("search/"+searchText)
        props.setDataList(response.blogs)
      }
      fetchData();
    } else {
    }
  }, [searchText]);
  const handleAddData = () => {
    const newData = [
      { title: 'search', text: props.searchText },
      { title: 'Another Title', text: 'Another Text' },
    ]
    props.setDataList(newData);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollDetector onAddData = {props.onAddData} searchText={searchText}  />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="create-outline" size={24} color="white" />
          </TouchableOpacity>
          <TextInput value={searchText} onChange={handleInputChange} style={styles.input} placeholder="Search" />
          <TouchableOpacity onPress={handleAddData} style={styles.button}>
            <Ionicons name="search-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#2e5bff',
    borderRadius: 24,
    marginTop: 32,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#2e5bff',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
