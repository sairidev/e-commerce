import { useContext } from 'react';
import { IProduct } from './utils/definitions';
import { ProductsContext } from './context/Products';
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
