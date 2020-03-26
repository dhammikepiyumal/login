import React, {Component} from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export default  function LoginPage({navigation}) {
    return (
      <View style = {styles.container}>
        <View style = {styles.textfields}>
          <Text>
            Welcome to My App
          </Text>
          <TextInput style = {styles.input}
            placeholder = "username"
            returnKeyType = "next"
            onSubmitEditing = {() => this.passwordInput.focus()}
            keyboardType = "email-address"
            autoCapitalize = "none"
            autoCorrect = {false}
          />
          <TextInput style = {styles.input}
            placeholder = "password"
            returnKeyType = "go"
            secureTextEntry
            ref = {(input) => this.passwordInput = input}
          />
          <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => navigation.navigate('Home')}>
            <Text style = {styles.buttontext}> Login </Text>
          </TouchableOpacity>
          <Button
            title = "Singup Now!"
            color = "#1abc9c"
            onPress = {() => navigation.navigate('Register')}
          />
        </View>
      </View>
    );
};

