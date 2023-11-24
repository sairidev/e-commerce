import React, { createContext } from 'react';
import Shop from './Shop'; // context
import { products } from '../utils/products'; //db products
import { IProduct } from '../utils/definitions';

export const ProductsContext = createContext<IProduct[]>([]);

function Products({ children }: { children: React.ReactNode }) {
  return (
    <ProductsContext.Provider value={products}>
      <Shop>{children}</Shop>
    </ProductsContext.Provider>
  );
}

export default Products;
