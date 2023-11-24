export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  amount?: number | 0;
  total?: number;
}
