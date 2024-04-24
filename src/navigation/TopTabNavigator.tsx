/* REACT */
import React, {useLayoutEffect} from 'react';
/* MODULES */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
/* COMPONENTS */
import AllOrders from '../screens/AllOrders';
import MyOrder from '../screens/MyOrder';
import HeaderTitle from '../components/HeaderTitle';
import HeaderRight from '../components/HeaderRight';
/* UTILS */
import {SCREEN_NAMES} from './routes';
/* STYLES */
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: HeaderTitle,
      headerRight: HeaderRight,
    });
  }, [navigation]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
      }}>
      <Tab.Screen
        name={SCREEN_NAMES.MY_ORDER}
        component={MyOrder}
        listeners={{
          tabPress: () => navigation.setOptions({headerTitle: HeaderTitle}),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.ALL_ORDERS}
        component={AllOrders}
        listeners={{
          tabPress: () => {
            navigation.setOptions({
              headerTitle: () => <HeaderTitle isNoOrder />,
            });
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
