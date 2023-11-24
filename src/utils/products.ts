import { IProduct } from './definitions';
import img01 from '../assets/01.png';
import img02 from '../assets/02.png';
import img03 from '../assets/03.png';

export const products: IProduct[] = [
  {
    id: 465,
    name: 'Nike Shoes',
    description: 'Very elegant white nike shoes',
    price: 54,
    img: img01,
  },
  {
    id: 546,
    name: 'T-shirt',
    description: 'Black T-shirt',
    price: 22,
    img: img02,
  },
  {
    id: 213,
    name: 'Cap',
    description: 'Very elegant black cap',
    price: 25,
    img: img03,
  },
];
