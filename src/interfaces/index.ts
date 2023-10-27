export interface IShop {
  id: number;
  name: string;
  price: number;
  amount: number;
  total?: number;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

export interface IShopAction {
  type: string;
  payload: IShop;
}
