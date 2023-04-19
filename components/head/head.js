import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="create-outline" size={24} color="white" />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Search" />
      <TouchableOpacity style={styles.button}>
        <Ionicons name="search-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2e5bff',
    paddingHorizontal: 16,
    paddingVertical: 12,
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