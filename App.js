/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigator from './Screens/Stack';

const App: () => React$Node = (navigation) => {
  return (
    <Navigator/>
  );
};

const styles = StyleSheet.create({
  container : {
    padding : 20,
    flex : 1,
    backgroundColor : Colors.white,
    justifyContent : 'center',
    alignItems : 'stretch'
  },
  input : {
    paddingLeft : 20,
    borderRadius : 50,
    height : 50,
    fontSize : 25,
    backgroundColor : Colors.white,
    borderColor : Colors.black,
    borderWidth : 1,
    marginBottom : 20,
    color : 'green'
  },
  buttoncontainer : {
    height : 50,
    borderRadius : 50,
    backgroundColor : Colors.blue,
    paddingVertical : 10,
    justifyContent : 'center'
  },
  buttontext : {
    textAlign : 'center',
    color : Colors.black,
    fontSize : 20
  },
  text : {
    textAlign : 'center',
    color : '#ecfof1',
    fontSize : 20
  }
});

export default App;
