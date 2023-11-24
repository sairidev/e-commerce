import { IProduct } from './definitions';

export function productFilter(data: IProduct, shop: IProduct[]) {
  const { id, amount } = data;
  const product = shop.filter((product: IProduct) => product.id == id)[0];

  return { ...product, amount, total: product.price * (amount || 0) };
}

export function productChanges(state: IProduct[], action: any) {
  return state.map((product) =>
    product.id === action.payload.id ? action.payload : product
  );
}
