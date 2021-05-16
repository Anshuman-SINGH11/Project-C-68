import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FaceBook from './screens/FaceBook';
import Instagram from './screens/Instagram';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
<AppContainer/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  },
});

const AppNavigator = createBottomTabNavigator({
  FaceBook:FaceBook,
  Instagram:Instagram
    
  })
  const AppContainer = createAppContainer(AppNavigator)
