/* REACT */
import React from 'react';
import {TouchableOpacity, View, Text, Alert} from 'react-native';
/* COMPONENTS */
import CartIcon from '../../assets/icons/CartIcon';
import ForkKnifeIcon from '../../assets/icons/ForkKnifeIcon';
/* UTILS */
import {COLORS} from '../../utils/theme';
/* STYLES */
import styles from './styles';

const HeaderRight = () => {
  const onNotificationsPress = () => {
    Alert.alert('Notifications Pressed!');
  };
  const onCartPress = () => {
    Alert.alert('Cart Pressed!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCartPress}>
        <CartIcon color={COLORS.PRIMARY} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNotificationsPress}>
        <View style={styles.forkIconContainer}>
          <ForkKnifeIcon color={COLORS.WHITE} />
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>6</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
