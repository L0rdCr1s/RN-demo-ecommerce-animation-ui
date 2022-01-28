import {nanoid} from 'nanoid/non-secure';
import {ShoeType} from 'store/utils/types';

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

export const sampleShoes: ShoeType[] = [
  {
    id: nanoid(10),
    name: 'Lebron19',
    price: '$750.00',
    brand: 'Nike',
    color: '#6b52ae',
    thumbnail: require('assets/img/1.png'),
    images: [
      require('assets/img/lebron19-1.jpg'),
      require('assets/img/lebron19-2.jpg'),
      require('assets/img/lebron19-3.jpg'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
  {
    id: nanoid(10),
    name: 'Air Jordan',
    price: '$550.00',
    brand: 'Nike',
    color: '#193498',
    thumbnail: require('assets/img/2.png'),
    images: [
      require('assets/img/wairjordan-1.jpg'),
      require('assets/img/wairjordan-2.jpg'),
      require('assets/img/wairjordan-3.jpg'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
  {
    id: nanoid(10),
    name: 'KD14',
    price: '$350.00',
    brand: 'Nike',
    color: '#B05E27',
    thumbnail: require('assets/img/3.png'),
    images: [
      require('assets/img/KD14-1.jpg'),
      require('assets/img/KD14-2.jpg'),
      require('assets/img/KD14-3.jpeg'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
  {
    id: nanoid(10),
    name: 'SNKRS',
    price: '$150.00',
    brand: 'Nike',
    color: '#333333',
    thumbnail: require('assets/img/4.png'),
    images: [
      require('assets/img/SNKRS-1.jpg'),
      require('assets/img/SNKRS-2.jpg'),
      require('assets/img/SNKRS-3.jpg'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
];
