/* REACT */
import React, {useCallback, useEffect, useLayoutEffect, useMemo} from 'react';
import {View, Text, SectionList} from 'react-native';
/* MODULES */
import {useNavigation} from '@react-navigation/native';
/* STORE */
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {selectMyOrder} from '../../store/slices/ordersSlice';
import {
  checkUncheckMyOrderItems,
  getOrdersThunk,
  changeAmountMyOrderItem,
  selectRestaurantId,
  selectRestaurantQrCodeName,
  postOrdersThunk,
} from '../../store/slices/ordersSlice';
/* COMPONENTS */
import OrderListItem from '../../components/OrderListItem';
import CheckBox from '../../components/CheckBox';
import OrderScreenWrapper from '../../components/OrderScreenWrapper';
import Total from '../../components/Total';
import PayButton from '../../components/PayButton';
/* UTILS */
import {COLORS} from '../../utils/theme';
import {makeMyOrderBodyToPost} from '../../utils/builders';
import {ORDER_STATUS} from '../../utils/constants';
import {Order, OrderItem} from '../../utils/types';
import {SCREEN_NAMES} from '../../navigation/routes';
/* STYLES */
import styles from './styles';

const testID = SCREEN_NAMES.MY_ORDER;

const MyOrder = () => {
  const dispatch = useDispatch();
  const restaurantId = useAppSelector(selectRestaurantId);
  const qrCodeName = useAppSelector(selectRestaurantQrCodeName);

  const navigation = useNavigation();
  const myOrder = useAppSelector(selectMyOrder);
  const isSelectedAll = myOrder?.orderItems.every(
    item => item.checked,
  ) as boolean;

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarLabel: SCREEN_NAMES.MY_ORDER,
    });
  }, [navigation]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getOrdersThunk());
  }, [dispatch]);

  const checkUncheckAll = useCallback(
    (isCheck: boolean) =>
      dispatch(checkUncheckMyOrderItems({checked: isCheck})),
    [dispatch],
  );

  const makeData = useMemo(() => {
    const newItems = myOrder?.orderItems.filter(
      item => item.status === ORDER_STATUS.New,
    );

    const inProgressItems = myOrder?.orderItems.filter(
      item => item.status === ORDER_STATUS.InProgress,
    );

    const readyItems = myOrder?.orderItems.filter(
      item => item.status === ORDER_STATUS.Ready,
    );

    const data = [];

    if (newItems?.length) {
      data.push({
        title: 'New',
        data: newItems,
      });
    }

    if (inProgressItems?.length) {
      data.push({
        title: 'In Progress',
        data: inProgressItems,
      });
    }

    if (readyItems?.length) {
      data.push({
        title: 'Ready',
        data: readyItems,
      });
    }

    return data;
  }, [myOrder]);

  const totalPrice = useCallback(() => {
    return (
      myOrder?.orderItems.reduce((acc, curr) => {
        return curr.checked ? acc + curr.amount * curr.price : acc;
      }, 0) || 0
    );
  }, [myOrder]);

  const onChangeCheckOrderItem = useCallback(
    ({check, itemId}: {check: boolean; itemId: string}) => {
      dispatch(checkUncheckMyOrderItems({checked: check, itemId}));
    },
    [dispatch],
  );

  const onChangeAmountItem = useCallback(
    ({updatedAmount, itemId}: {updatedAmount: number; itemId: string}) => {
      dispatch(changeAmountMyOrderItem({updatedAmount, itemId}));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({item}: {item: OrderItem; index: number}) => (
      <OrderListItem
        orderItem={item}
        onChangeCheckbox={onChangeCheckOrderItem}
        onChangeAmount={onChangeAmountItem}
      />
    ),
    [onChangeCheckOrderItem, onChangeAmountItem],
  );

  const renderSectionHeader = useCallback(
    ({section: {title}}: {section: {title: string}}) => (
      <Text style={styles.sectionHeader}>{title}</Text>
    ),
    [],
  );

  const amountItems = useMemo(() => {
    return myOrder?.orderItems?.reduce((acc, curr) => {
      return curr.checked && !curr?.isPaid ? acc + curr.amount : acc;
    }, 0);
  }, [myOrder]);

  const renderSectionFooter = useCallback(
    () => <Total amountItems={amountItems as number} price={totalPrice()} />,
    [amountItems, totalPrice],
  );

  const payOrders = () => {
    const body = makeMyOrderBodyToPost(myOrder as Order);
    // @ts-ignore
    dispatch(postOrdersThunk({restaurantId, qrCodeName, body}));
  };

  return (
    <OrderScreenWrapper testId={`${testID}-container`}>
      <SectionList
        testID={`${testID}-list`}
        contentContainerStyle={styles.sectionContainer}
        ListHeaderComponent={
          <CheckBox
            checked={isSelectedAll}
            title={isSelectedAll ? 'Unselect all' : 'Select all'}
            onChange={checkUncheckAll}
            style={styles.checkbox}
            checkedColor={COLORS.GRADIENT_TOP}
            testID={`${testID}-list-header-checkbox`}
          />
        }
        sections={makeData}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={renderSectionFooter}
      />
      <View style={styles.payButtonContainer}>
        <PayButton
          amountItems={amountItems as number}
          price={totalPrice() as number}
          onPress={payOrders}
          testID={`${testID}-pay-button`}
        />
      </View>
    </OrderScreenWrapper>
  );
};

export default MyOrder;
