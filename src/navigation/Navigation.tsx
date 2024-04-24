/* REACT */
import React from 'react';
/* COMPONENTS */
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const Navigation = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default Navigation;
