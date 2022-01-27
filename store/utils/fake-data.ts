import {nanoid} from 'nanoid/non-secure';
import {ShoeType} from 'store/utils/types';

const description = `
Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s,
`;

export const sampleShoes: ShoeType[] = [
  {
    id: nanoid(10),
    name: 'Lebron19',
    price: '$750',
    brand: 'Nike',
    image: [
      require('assets/img/lebron19-1.webp'),
      require('assets/img/lebron19-2.webp'),
      require('assets/img/lebron19-3.webp'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
  {
    id: nanoid(10),
    name: 'Air Jordan',
    price: '$550',
    brand: 'Nike',
    image: [
      require('assets/img/wairjordan-1.webp'),
      require('assets/img/wairjordan-2.webp'),
      require('assets/img/wairjordan-3.webp'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
  {
    id: nanoid(10),
    name: 'KD14',
    price: '$350',
    brand: 'Nike',
    image: [
      require('assets/img/KD14-1.webp'),
      require('assets/img/KD14-2.webp'),
      require('assets/img/KD14-3.jpeg'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
  {
    id: nanoid(10),
    name: 'SNKRS',
    price: '$150',
    brand: 'Nike',
    image: [
      require('assets/img/SNKRS-1.webp'),
      require('assets/img/SNKRS-2.webp'),
      require('assets/img/SNKRS-3.webp'),
    ],
    description: description,
    size: [7.5, 8, 9.5],
  },
];
