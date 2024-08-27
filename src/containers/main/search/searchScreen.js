import React from 'react';
import {View, Text, TextInputComponent} from 'react-native';
import palette from '../../../res/palette';
import {WebView} from 'react-native-webview';

import SearchGrid from './SearchGrid';
import SearchTopTags from './SearchTopTags';
export default function searchScreen() {
  return (
    <View style={{backgroundColor: '#000'}}>
      <SearchTopTags />
      <SearchGrid />
    </View>
  );
}
