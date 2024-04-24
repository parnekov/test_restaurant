/* REACT */
import React from 'react';
import {View, Text} from 'react-native';
/* COMPONENTS */
import CheckBox from '../CheckBox';
import CloseIcon from '../../assets/icons/CloseIcon';
import Counter from '../Counter';
/* UTILS */
// import {ORDER_STATUS} from '../../utils/constants';
import {COLORS} from '../../utils/theme';
/* TYPES */
import {OrderItem} from '../../utils/types';
/* STYLES */
import styles from './styles';

type Props = {
  orderItem: OrderItem;
  onChangeCheckbox: Function;
  onChangeAmount: Function;
};

const OrderListItem = ({
  orderItem,
  onChangeCheckbox,
  onChangeAmount,
}: Props) => {
  const {name, id, amount, price, checked, isPaid} = orderItem;

  const onChangeCheck = (check: boolean) => {
    onChangeCheckbox({check, itemId: id});
  };

  const onChangeAmountItem = (updatedAmount: number) => {
    onChangeAmount({updatedAmount, itemId: id});
  };

  // TODO: clarify
  // const isEnabled = status === ORDER_STATUS.New && !isPaid;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CheckBox
          title={name}
          checked={checked as boolean}
          onChange={onChangeCheck}
          // isDisabled={isPaid}
        />
        <CloseIcon color={COLORS.PRIMARY_LIGHT} size={16} />
      </View>
      <View style={styles.row}>
        <Text style={styles.chf}>
          CHF{' '}
          <Text style={styles.chfAmount}>{(amount * price)?.toFixed(2)}</Text>
        </Text>
        {isPaid && <Text style={styles.paid}>Paid</Text>}
        <Counter
          amount={amount}
          onChange={onChangeAmountItem}
          // isEnabled={isEnabled}
        />
      </View>
    </View>
  );
};

export default OrderListItem;
