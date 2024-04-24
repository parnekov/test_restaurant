/* REACT */
import {Alert} from 'react-native';
/* MODULES */
import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
/* TYPES */
import type {RootState} from '../store';
import {Order, GlobalOrder} from '../../utils/types';
import {getOrders, payOrders} from '../../api/orders';
import {PayOrders} from '../../utils/types';

// Define a type for the slice state
export interface OrdersState {
  order: {
    restaurantId: string;
    restaurantName: string;
    qrCodeName: string;
    myOrder: Order | null;
    orders: Array<Order> | null;
  };
  loading: boolean;
  error: string;
}

// Define the initial state using that type
export const initialState: OrdersState = {
  order: {
    restaurantId: '',
    restaurantName: '',
    qrCodeName: '',
    myOrder: null,
    orders: null,
  },
  loading: false,
  error: '',
};

export const getOrdersThunk = createAsyncThunk('getOrdersThunk', async () => {
  const response = await getOrders();
  return response;
});

export const postOrdersThunk = createAsyncThunk(
  'postOrdersThunk',
  async ({restaurantId, qrCodeName, body}: PayOrders) => {
    const response = await payOrders({restaurantId, qrCodeName, body});
    return response;
  },
);

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Array<Order> | null>) => {
      state.order.orders = action.payload;
    },
    checkUncheckMyOrderItems: (
      state,
      action: PayloadAction<{checked: boolean; itemId?: string}>,
    ) => {
      if (state.order?.myOrder !== null && !action.payload.itemId) {
        const updatedMyOrderItems = state.order?.myOrder.orderItems.map(
          item => ({
            ...item,
            checked: action.payload.checked,
          }),
        );
        state.order.myOrder.orderItems = updatedMyOrderItems;
      } else if (state.order?.myOrder !== null && action.payload.itemId) {
        const updatedMyOrderItems = state.order?.myOrder.orderItems.map(
          item => {
            if (item.id === action.payload.itemId) {
              return {
                ...item,
                checked: action.payload.checked,
              };
            } else {
              return item;
            }
          },
        );

        state.order.myOrder.orderItems = updatedMyOrderItems;
      }
    },
    checkUncheckAllOrderItems: (
      state,
      action: PayloadAction<{checked: boolean}>,
    ) => {
      if (state.order?.orders !== null) {
        const updatedAllOrders = state.order.orders.map(item => ({
          ...item,
          orderItems: item.orderItems.map(i => ({
            ...i,
            checked: action.payload.checked,
          })),
        }));
        state.order.orders = updatedAllOrders;
      }
    },
    checkUncheckAllOrderItemsByOrder: (
      state,
      action: PayloadAction<{checked: boolean; itemId?: string}>,
    ) => {
      if (state.order?.orders !== null && !action.payload.itemId) {
        const updatedAllOrders = state.order.orders.map(item => ({
          ...item,
          checked: action.payload.checked,
        }));
        state.order.orders = updatedAllOrders;
      } else if (state.order?.orders !== null && action.payload.itemId) {
        const updatedAllOrders = state.order.orders.map(item => {
          if (item.id === action.payload.itemId) {
            return {
              ...item,
              orderItems: item.orderItems.map(i => ({
                ...i,
                checked: action.payload.checked,
              })),
            };
          } else {
            return item;
          }
        });
        state.order.orders = updatedAllOrders;
      }
    },
    checkUncheckAllOrderItemsByOrdersItem: (
      state,
      action: PayloadAction<{checked: boolean; itemId?: string}>,
    ) => {
      if (state.order?.orders !== null && !action.payload.itemId) {
        const updatedAllOrders = state.order.orders.map(item => ({
          ...item,
          checked: action.payload.checked,
        }));
        state.order.orders = updatedAllOrders;
      } else if (state.order?.orders !== null && action.payload.itemId) {
        const updatedAllOrders = state.order.orders.map(item => {
          return {
            ...item,
            orderItems: item.orderItems.map(i => {
              if (i.id === action.payload.itemId) {
                return {
                  ...i,
                  checked: action.payload.checked,
                };
              } else {
                return i;
              }
            }),
          };
        });
        state.order.orders = updatedAllOrders;
      }
    },
    changeAmountMyOrderItem: (
      state,
      action: PayloadAction<{updatedAmount: number; itemId: string}>,
    ) => {
      if (state.order.myOrder !== null) {
        const updatedMyOrderItems = state.order.myOrder.orderItems.map(item => {
          if (item.id === action.payload.itemId) {
            return {
              ...item,
              amount: action.payload.updatedAmount,
            };
          } else {
            return item;
          }
        });

        state.order.myOrder.orderItems = updatedMyOrderItems;
      }
    },
    changeAmountOrderItem: (
      state,
      action: PayloadAction<{updatedAmount: number; itemId: string}>,
    ) => {
      if (state.order?.orders !== null) {
        const updatedAllOrders = state.order.orders.map(item => ({
          ...item,
          orderItems: item.orderItems.map(i => {
            if (i.id === action.payload.itemId) {
              return {
                ...i,
                amount: action.payload.updatedAmount,
              };
            } else {
              return i;
            }
          }),
        }));
        state.order.orders = updatedAllOrders;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOrdersThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getOrdersThunk.fulfilled, (state, action) => {
        state.loading = false;
        const payload = action.payload as GlobalOrder;
        const updatedMyOrderItems = payload.myOrder.orderItems.map(item => ({
          ...item,
          checked: true,
        }));
        const updatedAllOrders = payload.orders.map(item => ({
          ...item,
          orderItems: item.orderItems.map(i => ({...i, checked: true})),
        }));
        state.order = {
          ...payload,
          myOrder: {...payload.myOrder, orderItems: updatedMyOrderItems},
          orders: updatedAllOrders,
        };
      })
      .addCase(getOrdersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })

      .addCase(postOrdersThunk.pending, state => {
        state.loading = true;
      })
      .addCase(postOrdersThunk.fulfilled, state => {
        state.loading = false;
        Alert.alert('Order Paid!');
      })
      .addCase(postOrdersThunk.rejected, (state, action) => {
        state.loading = false;
        Alert.alert('Order Paid Error!');
        state.error = action.error.message as string;
      });
  },
});

export const {
  setOrders,
  checkUncheckMyOrderItems,
  checkUncheckAllOrderItems,
  checkUncheckAllOrderItemsByOrder,
  checkUncheckAllOrderItemsByOrdersItem,
  changeAmountMyOrderItem,
  changeAmountOrderItem,
} = ordersSlice.actions;

export const selectOrders = (state: RootState) => state.order.order.orders;
export const selectMyOrder = (state: RootState) => state.order.order.myOrder;
export const selectRestaurantId = (state: RootState) =>
  state.order.order.restaurantId;
export const selectRestaurantName = (state: RootState) =>
  state.order.order.restaurantName;
export const selectRestaurantQrCodeName = (state: RootState) =>
  state.order.order.qrCodeName;

export default ordersSlice.reducer;
