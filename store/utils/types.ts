import {ImageSourcePropType} from 'react-native';

export type ShoeType = {
  id: string;
  name: string;
  price: string;
  brand: string;
  color: string;
  thumbnail: ImageSourcePropType;
  images: ImageSourcePropType[];
  description: string;
  size: number[];
};

export type CartItemType = {
  id: string;
  shoe: ShoeType;
  count: number;
};
