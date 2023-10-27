import { useContext } from 'react';
import { ProductsContext } from './context/Products';
import { IProduct } from './interfaces';
import Card from './components/Card';
import './App.css';

function App() {
  const products = useContext(ProductsContext);

  return (
    <>
      {products.map((product: IProduct) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  );
}

export default App;
