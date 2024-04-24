/* REACT */
import React from 'react';
import {Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
/* UTILS */
import {COLORS} from '../../utils/theme';
/* STYLES */
import styles from './styles';

type Props = {
  amountItems: number;
  price: number;
  onPress: (event: GestureResponderEvent) => void;
  testID?: string;
};

const PayButton = ({amountItems, price, onPress, testID}: Props) => {
  const isDisabled = !amountItems;

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.container, isDisabled && {backgroundColor: COLORS.GRAY}]}
      disabled={!amountItems}>
      <Text style={styles.text}>PAY </Text>
      <Text style={styles.text}>
        <Text>{amountItems}</Text> <Text>/ </Text>
        <Text>{price?.toFixed(2)}</Text> <Text>CHF</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default PayButton;
