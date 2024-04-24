/* TYPES */
import {Order, ItemsToPay} from './types';

export const makeMyOrderBodyToPost = (myOrder: Order) => {
  if (myOrder?.orderItems?.every(item => item.checked)) {
    return {
      ordersToPay: [myOrder.id],
      itemsToPay: [],
    };
  } else {
    const itemsToPay: ItemsToPay = [];
    myOrder?.orderItems?.forEach(element => {
      if (element.checked) {
        itemsToPay.push({
          orderId: myOrder.id,
          itemId: element.id,
        });
      }
    });
    return {
      ordersToPay: [],
      itemsToPay: itemsToPay,
    };
  }
};

export const makeAllOrdersBodyToPost = (orders: Array<Order> | null) => {
  const ordersToPay: Array<string> = [];
  const itemsToPay: ItemsToPay = [];
  orders?.forEach(order => {
    if (order?.orderItems?.every(item => item.checked)) {
      ordersToPay.push(order.id);
    } else {
      order?.orderItems?.forEach(item => {
        if (item.checked) {
          itemsToPay.push({
            orderId: order.id,
            itemId: item.id,
          });
        }
      });
    }
  });
  return {
    ordersToPay,
    itemsToPay,
  };
};
