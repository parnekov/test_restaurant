import React from 'react';
/* MODULES */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* COMPONENTS */
import TopTabNavigator from './TopTabNavigator';
import Restaurants from '../screens/Restaurants';
/* UTILS */
import {SCREEN_NAMES} from './routes';
import {COLORS} from '../utils/theme';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: COLORS.PRIMARY,
    }}>
    <Stack.Screen name={SCREEN_NAMES.RESTAURANTS} component={Restaurants} />
    <Stack.Screen name={SCREEN_NAMES.TABS_ORDERS} component={TopTabNavigator} />
  </Stack.Navigator>
);

export default StackNavigator;
