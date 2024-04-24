/* MODULES */
import {configureStore} from '@reduxjs/toolkit';
/* REDUCERS */
import OrdersReducer from './slices/ordersSlice';

export const store = configureStore({
  reducer: {
    order: OrdersReducer,
  }, // @Note: As there is an error with empty object use a Reducer as a stub.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // fix of "A non-serializable value was detected in the state" error
    }),
});

// @Note: infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
