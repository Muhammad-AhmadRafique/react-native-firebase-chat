import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../features/authentication/Auth/screens/login.screen.js/login.screen';
import SignupScreen from '../features/authentication/Auth/screens/signup.screen.js/signup.screen';
import {NavigationKeys} from '../utilities/constants/constants';
import ForgotPasswordScreen from '../features/authentication/Auth/screens/forgot.password.screen.js/forgot.password.screen';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavigationKeys.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={NavigationKeys.FORGET_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={NavigationKeys.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
