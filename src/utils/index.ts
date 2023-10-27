import { IShop, IShopAction } from '../interfaces';

export function productFilter(data: IShop, shop: IShop[]) {
  const { id, amount } = data;
  const product = shop.filter((product) => product.id == id)[0];

  return { ...product, amount, total: product.price * amount };
}

export function productChanges(state: IShop[], action: IShopAction) {
  return state.map((product) =>
    product.id === action.payload.id ? action.payload : product
  );
}
