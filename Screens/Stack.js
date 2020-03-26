import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/LoginPage';
import Home from '../Screens/HomePage';
import Register from '../Screens/RegisterPage';

const Stack = CreateStackNavigator();

export default function TheStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "LOGIN"
          component={Login}
          options={{title: 'Welcome to the App'}}
        />
        <Stack.Screen
          name = "HOME"
          component = {Home}
        />
        <Stack.Screen
          name = "REGISTER"
          component = {Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}