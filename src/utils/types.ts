/* UTILS */
import {ORDER_STATUS} from './constants';

export type OrderItem = {
  price: number;
  name: string;
  id: string;
  amount: number;
  status: ORDER_STATUS;
  isPaid: boolean;
  checked?: boolean;
};

export type GlobalOrder = {
  myOrder: Order;
  orders: Array<Order>;
  restaurantId: string;
  restaurantName: string;
  qrCodeName: string;
};

export type Order = {
  id: string;
  orderNumber: number;
  createDate: number;
  isPaid: boolean;
  status: ORDER_STATUS;
  totalAmount: number;
  orderItems: Array<OrderItem>;
};

export type ItemToPay = {
  orderId: string;
  itemId: string;
};

export type PayOrders = {
  restaurantId: string;
  qrCodeName: string;
  body: {
    ordersToPay: Array<string>;
    itemsToPay: Array<ItemToPay>;
  };
};

export type GetOrdersResponse = {
  restaurantId: string;
  restaurantName: string;
  qrCodeName: string;
  myOrder: Order;
};

export type FailedPayOrdersResponse = {
  type: string;
  title: string;
  status: string;
  traceId: Order;
};

export type ItemsToPay = Array<{
  orderId: string;
  itemId: string;
}>;
