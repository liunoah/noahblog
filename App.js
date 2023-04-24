import React from 'react';
import { View, Text, ImageBackground, Platform } from 'react-native';
import Header from './components/head/head';
import {Body} from "./components/body/Body"
import MD from './components/tools/markdown/Markdown';
export default function App() {
  const randomImage = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 1000
  )}/1200/1920`;
  return (
    <ImageBackground
      source={{ uri: randomImage }}
      style={{ flex: 1 }}
    >
      <View style={{ width: 1000, alignSelf: 'center' }}>
        <Body />
      </View>
    </ImageBackground>
  );
}