import WelcomeScreen from './app/screens/WelcomeScreen';
import React from 'react';
// import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from './app/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/Home';
import SignupScreen from './app/screens/SignUp';

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
