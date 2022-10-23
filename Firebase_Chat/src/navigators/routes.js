import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './auth.stack';
import {NavigationKeys} from '../utilities/constants/constants';
import DashboardStack from './dashboard.stack';
import HomeStack from './home.stack';

const Stack = createStackNavigator();

function Routes(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="authStack" component={AuthStack} />
        <Stack.Screen name="homeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
