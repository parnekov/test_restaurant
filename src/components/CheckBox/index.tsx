/* REACT */
import React from 'react';
import {TouchableOpacity, View, Text, StyleProp, ViewStyle} from 'react-native';
/* COMPONENTS */
import CheckIcon from '../../assets/icons/CheckIcon';
/* UTILS */
import {COLORS} from '../../utils/theme';
/* STYLES */
import styles from './styles';

type Props = {
  checked: boolean;
  checkedColor?: string;
  title: string;
  onChange: Function;
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  testID?: string;
};

const CheckBox = ({
  checked,
  title,
  onChange,
  style,
  checkedColor,
  isDisabled,
  testID,
}: Props) => {
  const onCheckChange = () => {
    onChange(!checked);
  };

  const iconContainerStyle = [
    styles.iconContainer,
    checked ? styles.checkedIconContainer : styles.uncheckedIconContainer,
  ];

  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.container, style]}
      onPress={onCheckChange}
      disabled={isDisabled}>
      <View style={iconContainerStyle}>
        <CheckIcon
          color={checked ? checkedColor || COLORS.WHITE : COLORS.WHITE}
          size={16}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
