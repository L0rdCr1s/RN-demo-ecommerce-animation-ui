import {ShoeType} from 'store/utils/types';

export const ROUTES = {
  DISCOVER: 'DISCOVER',
  DETAILS: 'DETAILS',
  CART: 'CART',
};

export type AppScreensStackParams = {
  DISCOVER: undefined;
  CART: undefined;
  DETAILS: {shoe: ShoeType};
};
