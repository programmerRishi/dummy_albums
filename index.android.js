// Index.android.js Place code here for android
// import a library to help create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// To create a Component
const App = () => (
  <View style={{ flex: 1 }}>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
);


// render it to device
AppRegistry.registerComponent('albums', () => App);
