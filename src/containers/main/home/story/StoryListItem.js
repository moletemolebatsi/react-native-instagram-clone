import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function StoryListItem({item, storyOnPress}) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={storyOnPress}>
        
          <View style={{borderWidth: 2, borderRadius: 100}}>
            <Image
              source={{uri: item.src}}
              style={{width: 55, height: 55, borderRadius: 70}}
            />
          </View>

      </TouchableOpacity>
      <View>
        <Text style={Styles.storyText}> {item.key} </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
  },
  storyText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});
