/* REACT */
import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
/* COMPONENTS */
import LinearGradient from 'react-native-linear-gradient';
/* UTILS */
import {COLORS} from '../../utils/theme';
/* STYLES */
import styles from './styles';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  testId?: string;
};

const colors = [
  COLORS.GRADIENT_TOP,
  COLORS.GRADIENT_CENTER,
  COLORS.GRADIENT_BOTTOM,
];

const OrderScreenWrapper = ({children, style, testId}: Props) => (
  <LinearGradient
    testID={testId}
    colors={colors}
    start={{x: 0.0, y: 0.15}}
    end={{x: 0.0, y: 1.0}}
    locations={[0, 0.4, 0.7]}
    style={[styles.linearGradient, style]}>
    {children}
  </LinearGradient>
);

export default OrderScreenWrapper;
