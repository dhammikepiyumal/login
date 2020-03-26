import React, {Component} from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export default function RegisterPage({navigation}) {
    return (
      <View style = {styles.container}>
        <View style = {styles.registerform}>
          <TextInput style = {styles.input}
            placeholder = "Enter your name"
            returnKeyType = "next"
            onSubmitEditing = {() => this.emailinput.focus()}
          />
          <TextInput style = {styles.input}
            placeholder = "Enter your email"
            returnKeyType = "next"
            onSubmitEditing = {() => this.emailinput.focus()}
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
            ref = {(input) => this.emailinput = input}
          />
          <TextInput style = {styles.input}
            placeholder = "Enter password"
            returnKeyType = "go"
            secureTextEntry
            ref = {(input) => this.passwordinput = input}
          />
          <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => navigation.navigate('Home')}>
            <Text> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

