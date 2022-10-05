import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../features/authentication/Auth/screens/login.screen.js/login.screen';
import SignupScreen from '../features/authentication/Auth/screens/signup.screen.js/signup.screen';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
