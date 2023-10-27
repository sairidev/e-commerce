import { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/Shop';
import { IShop } from '../interfaces';
import '../styles/Counter.scss';

function Counter({ productID }: { productID: number }) {
  const [counter, setCounter] = useState(0);
  const { state, add, rest }: any = useContext(ShopContext);

  const click = (e: any) => {
    const type = e.target.classList.value.split('').reverse()[0];

    if (type === '-') {
      if (counter - 1 < 0) {
        return;
      }

      setCounter(counter - 1);
      const obj = { id: productID, amount: counter - 1 };
      rest(obj);
    }

    if (type === '+') {
      setCounter(counter + 1);
      const obj = { id: productID, amount: counter + 1 };
      add(obj);
    }
  };

  useEffect(() => {
    const product = state.filter((product: IShop) =>
      product.id == productID ? product.amount : 0
    )[0];

    if (product !== undefined) {
      setCounter(product.amount);
    }
  }, [counter]);

  return (
    <div id='counter'>
      <span className='btn-' onClick={click}>
        -
      </span>
      <span>{counter}</span>
      <span className='btn+' onClick={click}>
        +
      </span>
    </div>
  );
}

export default Counter;
