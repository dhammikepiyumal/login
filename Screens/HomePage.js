import React, {Component} from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export default function HomePage({navigation}) {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}> Welcome to the Application </Text>
      </View>
    );
}

