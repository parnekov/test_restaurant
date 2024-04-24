/* MODULES */
import {apiRequest} from './apiService';
/* CONSTANTS */
import {API_PATH} from '../utils/constants';
/* TYPES */
import {PayOrders} from '../utils/types';

export const getOrders = () => {
  return apiRequest(API_PATH.GET_ORDERS);
};

export const payOrders = ({restaurantId, qrCodeName, body}: PayOrders) => {
  return apiRequest(
    `${API_PATH.PAY_ORDERS}?restaurantId=${restaurantId}&qrCodeName=${qrCodeName}`,
    'POST',
    body,
  );
};
