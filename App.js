import React from 'react';
import { View } from 'react-native';
import Header from './components/head/head';
import Body from './components/body/body';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Body />
    </View>
  );
}