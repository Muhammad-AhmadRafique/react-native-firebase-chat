import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './home.stack';
import {Images, NavigationKeys} from '../utilities/constants/constants';
import {colors} from '../infrastructure/theme/colors';
import {Image} from 'react-native';
import HomeScreen from '../features/dashboard/HomeScreen/screens/home.screen';

const Tab = createBottomTabNavigator();

export default function DashboardStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        tabBarLabelStyle: '30px',
        tabBarActiveTintColor: colors.ui.purple,
        tabBarInactiveTintColor: colors.ui.gray,
        headerShown: false,
      })}>
      <Tab.Screen
        name="home"
        component={HomeStack}
        size={20}
        options={{
          style: {justifyContent: 'center', alignItems: 'center'},
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image
                style={{height: 25, width: 22}}
                source={focused ? Images.google : Images.google}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
