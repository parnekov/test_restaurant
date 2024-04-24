/* REACT */
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
/* UTILS */
// import {COLORS} from '../../utils/theme';

/* STYLES */
import styles from './styles';

const hitSlop = {
  bottom: 10,
  left: 10,
  right: 10,
  top: 10,
};

type Props = {
  amount: number;
  isEnabled?: boolean;
  onChange: Function;
};

const Counter = ({amount, onChange}: Props) => {
  const isEnabled = true;
  const onPlusPress = () => {
    onChange(amount + 1);
  };

  const onMinusPress = () => {
    if (amount !== 0) {
      onChange(amount - 1);
    }
  };

  return (
    <View
      style={[
        styles.container,
        // TODO: NEED TO CLARIFY REQUIREMENTS
        // !isEnabled ? {backgroundColor: COLORS.GRAY} : {},
      ]}>
      <TouchableOpacity
        onPress={onMinusPress}
        disabled={!isEnabled}
        hitSlop={hitSlop}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{amount}</Text>
      <TouchableOpacity
        onPress={onPlusPress}
        disabled={!isEnabled}
        hitSlop={hitSlop}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
