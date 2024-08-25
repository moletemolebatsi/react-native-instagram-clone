import React from 'react';
import {StatusBar, View, Text, StyleSheet, CameraRoll} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function StoryCamera() {
  //StatusBar.setHidden(false);

  

  return (
    <View
      style={{
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column',
        marginTop: 10,
      }}>
      </View>
  );
}

const Styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
  },
  captureCircle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 60,
    alignItems: 'center',
    borderColor: 'white',
    marginBottom: 30,
  },
  captureButton: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
