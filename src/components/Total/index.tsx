/* REACT */
import React from 'react';
import {View, Text} from 'react-native';
/* STYLES */
import styles from './styles';

type Props = {
  amountItems: number;
  price: number;
};

const Total = ({amountItems, price}: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>Total: </Text>
    <Text style={styles.text}>
      <Text style={[styles.amountItems]}>{amountItems}</Text>{' '}
      <Text style={styles.amountItems}>/ </Text>
      <Text style={styles.chf}>CHF</Text> <Text>{price?.toFixed(2)}</Text>
    </Text>
  </View>
);

export default Total;
