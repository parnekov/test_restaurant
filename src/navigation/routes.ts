/* MODULES */
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export enum SCREEN_NAMES {
  RESTAURANTS = 'Restaurants',
  TABS_ORDERS = 'Tabs',
  ALL_ORDERS = 'All orders',
  MY_ORDER = 'My order',
}

export type StackParamList = {
  [SCREEN_NAMES.RESTAURANTS]: undefined;
  [SCREEN_NAMES.TABS_ORDERS]: undefined;
};

export type TabsParamList = {
  [SCREEN_NAMES.ALL_ORDERS]: undefined;
  [SCREEN_NAMES.MY_ORDER]: undefined;
};

export enum ROOT_ROUTES {
  RESTAURANT_STACK = 'RESTAURANT_STACK',
  TABS_STACK = 'TABS_STACK',
}

export type RootStackParamList = {
  [SCREEN_NAMES.RESTAURANTS]: NavigatorScreenParams<StackParamList>;
  [SCREEN_NAMES.TABS_ORDERS]: NavigatorScreenParams<TabsParamList>;
};

export const Stack = createNativeStackNavigator<StackParamList>();
export const Tabs = createNativeStackNavigator<TabsParamList>();
