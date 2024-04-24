/* REACT */
import React from 'react';
import {View, Text} from 'react-native';
/* MODULES */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
/* UTILS */
import {STRINGS} from '../../utils/constants';
import {SCREEN_NAMES, StackParamList} from '../../navigation/routes';
/* STYLES */
import styles from './styles';

const Restaurants = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => navigation.navigate(SCREEN_NAMES.TABS_ORDERS)}>
        {STRINGS.DEFAULT_RESTAURANT_NAME}
      </Text>
    </View>
  );
};

export default Restaurants;
