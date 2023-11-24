import React, { createContext, useContext, useReducer } from 'react';
import { ProductsContext } from './Products';
import { productChanges, productFilter } from '../utils';
import { IProduct } from '../utils/definitions';

export const ShopContext = createContext<{
  state: any;
  add: any;
  rest: any;
  clear: any;
}>({
  state: {},
  add: () => {},
  rest: () => {},
  clear: () => {},
});

const reducer = (state: IProduct[], action: any) => {
  switch (action.type) {
    case 'add': {
      if (
        state.filter((product: IProduct) => product.id === action.payload.id)
          .length === 0
      ) {
        return [...state, action.payload];
      }

      return productChanges(state, action);
    }

    case 'rest': {
      if (action.payload.amount === 0) {
        return state.filter(
          (product: IProduct) => product.id !== action.payload.id
        );
      }

      return productChanges(state, action);
    }

    case 'clear':
      return [];

    default:
      return state;
  }
};

function Shop({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, []);
  const shop = useContext(ProductsContext);

  const add = (data: IProduct) => {
    dispatch({
      type: 'add',
      payload: productFilter(data, shop),
    });
  };

  const rest = (data: IProduct) => {
    dispatch({
      type: 'rest',
      payload: productFilter(data, shop),
    });
  };

  const clear = () => {
    dispatch({
      type: 'clear',
      payload: { id: 0, amount: 0, name: '', price: 0 },
    });
  };

  return (
    <ShopContext.Provider value={{ state, add, rest, clear }}>
      {children}
    </ShopContext.Provider>
  );
}

export default Shop;
