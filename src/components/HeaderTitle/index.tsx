/* REACT */
import React from 'react';
import {View, Text} from 'react-native';
/* STORE */
import {useAppSelector} from '../../store/hooks';
import {
  selectMyOrder,
  selectRestaurantName,
} from '../../store/slices/ordersSlice';
/* STYLES */
import styles from './styles';

const HeaderTitle = ({isNoOrder}: {isNoOrder: boolean}) => {
  const myOrder = useAppSelector(selectMyOrder);
  const restaurantName = useAppSelector(selectRestaurantName);
  return (
    <View style={styles.container}>
      <Text style={styles.restaurantName}>{restaurantName}</Text>
      <Text style={styles.orderNumber}>
        QR name
        {!isNoOrder && myOrder?.orderNumber ? (
          <Text> / №{myOrder?.orderNumber}</Text>
        ) : null}
      </Text>
    </View>
  );
};

export default HeaderTitle;
