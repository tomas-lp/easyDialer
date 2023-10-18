import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Main from './src/Main';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}
