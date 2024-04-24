/* REACT */
import React, {useLayoutEffect, useMemo, useCallback} from 'react';
import {SectionList, View} from 'react-native';
/* MODULES */
import {useNavigation} from '@react-navigation/native';
/* STORE */
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {
  selectOrders,
  checkUncheckAllOrderItems,
  checkUncheckAllOrderItemsByOrder,
  checkUncheckAllOrderItemsByOrdersItem,
  changeAmountOrderItem,
  postOrdersThunk,
  selectRestaurantId,
  selectRestaurantQrCodeName,
} from '../../store/slices/ordersSlice';
/* COMPONENTS */
import OrderScreenWrapper from '../../components/OrderScreenWrapper';
import CheckBox from '../../components/CheckBox';
import OrderListItem from '../../components/OrderListItem';
import Total from '../../components/Total';
import PayButton from '../../components/PayButton';
/* UTILS */
import {COLORS} from '../../utils/theme';
import {OrderItem} from '../../utils/types';
import {ORDER_STATUS} from '../../utils/constants';
import {makeAllOrdersBodyToPost} from '../../utils/builders';
import {SCREEN_NAMES} from '../../navigation/routes';
/* STYLES */
import styles from './styles';

const AllOrders = () => {
  const navigation = useNavigation();
  const orders = useAppSelector(selectOrders);
  const restaurantId = useAppSelector(selectRestaurantId);
  const qrCodeName = useAppSelector(selectRestaurantQrCodeName);
  const dispatch = useDispatch();

  const isSelectAllOrders = orders?.every(item =>
    item.orderItems.every(i => i.checked),
  ) as boolean;

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarLabel: SCREEN_NAMES.ALL_ORDERS,
    });
  }, [navigation]);

  const checkUncheckAll = useCallback(
    (isCheck: boolean) =>
      dispatch(checkUncheckAllOrderItems({checked: isCheck})),
    [dispatch],
  );

  const makeData = () => {
    if (orders?.length) {
      return orders?.map(item => {
        return {
          id: item.id,
          title: `№ ${item.orderNumber}`,
          data: item.orderItems,
        };
      });
    }
    return [];
  };

  const totalPrice = useCallback(() => {
    return orders?.reduce((acc, curr) => {
      return (
        acc +
          curr.orderItems.reduce((accItem, currItem) => {
            return currItem.checked
              ? accItem + currItem.amount * currItem.price
              : accItem;
          }, 0) || 0
      );
    }, 0);
  }, [orders]);

  const onChangeCheckOrderItem = useCallback(
    ({check, itemId}: {check: boolean; itemId: string}) => {
      dispatch(checkUncheckAllOrderItemsByOrdersItem({checked: check, itemId}));
    },
    [dispatch],
  );

  const onChangeAmountItem = useCallback(
    ({updatedAmount, itemId}: {updatedAmount: number; itemId: string}) => {
      dispatch(changeAmountOrderItem({updatedAmount, itemId}));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({item}: {item: OrderItem}) => (
      <OrderListItem
        orderItem={item}
        onChangeCheckbox={onChangeCheckOrderItem}
        onChangeAmount={onChangeAmountItem}
      />
    ),
    [onChangeCheckOrderItem, onChangeAmountItem],
  );

  const renderSectionHeader = useCallback(
    (prop: {section: {id: string; title: string; data: Array<OrderItem>}}) => {
      const isChecked = prop.section.data.every(item => item.checked);
      const isDisabled = prop.section.data.every(
        item => item.status === ORDER_STATUS.New && !item.isPaid,
      );
      const onChange = () => {
        dispatch(
          checkUncheckAllOrderItemsByOrder({
            checked: !isChecked,
            itemId: prop.section.id,
          }),
        );
      };

      return (
        <CheckBox
          isDisabled={isDisabled}
          style={{paddingTop: 16}}
          title={prop.section.title}
          checked={isChecked}
          onChange={onChange}
        />
      );
    },
    [dispatch],
  );

  const amountItems = useMemo(() => {
    return orders?.reduce((acc, curr) => {
      return (
        acc +
          curr.orderItems.reduce((accI, currI) => {
            return currI.checked ? accI + currI.amount : accI;
          }, 0) || 0
      );
    }, 0);
  }, [orders]);

  const renderSectionFooter = useCallback(
    () => (
      <Total
        amountItems={amountItems as number}
        price={totalPrice() as number}
      />
    ),
    [amountItems, totalPrice],
  );

  const payOrders = () => {
    const body = makeAllOrdersBodyToPost(orders);
    // @ts-ignore
    dispatch(postOrdersThunk({restaurantId, qrCodeName, body}));
  };

  return (
    <OrderScreenWrapper>
      <SectionList
        contentContainerStyle={styles.sectionContainer}
        ListHeaderComponent={
          <CheckBox
            checked={!!isSelectAllOrders}
            title={isSelectAllOrders ? 'Unselect all' : 'Select all'}
            onChange={checkUncheckAll}
            style={styles.checkbox}
            checkedColor={COLORS.GRADIENT_TOP}
          />
        }
        sections={makeData()}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={renderSectionFooter}
        extraData={isSelectAllOrders}
      />
      <View style={styles.payButtonContainer}>
        <PayButton
          amountItems={amountItems as number}
          price={totalPrice() as number}
          onPress={payOrders}
        />
      </View>
    </OrderScreenWrapper>
  );
};

export default AllOrders;
