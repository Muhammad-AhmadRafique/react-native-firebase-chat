import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationKeys} from '../utilities/constants/constants';
import HomeScreen from '../features/dashboard/HomeScreen/screens/home.screen';
import SettingScreen from '../features/dashboard/setting.screen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}
