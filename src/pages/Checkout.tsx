import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/Shop';

import Table from '../components/Table';
import '../styles/Checkout.scss';
import { IProduct } from '../utils/definitions';

function Checkout() {
  const { state, clear } = useContext(ShopContext);
  const [total, setTotal] = useState(0);
  const [bought, setBought] = useState(false);

  const handleBought = () => {
    setBought(true);
    clear();
  };

  useEffect(() => {
    if (state.length > 0) {
      const values = state.map((product: IProduct) => product.total);
      setTotal(values.reduce((val: number, total: number) => (total += val)));
    }
  }, [total]);

  return (
    <div id='checkout'>
      {bought ? (
        <h3>Thanks for your purchase!</h3>
      ) : (
        <>
          <Table total={total} />

          {total !== 0 && (
            <span className='btn' onClick={handleBought}>
              Pay
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;
