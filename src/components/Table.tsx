import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { IShop } from '../interfaces';
import { ShopContext } from '../context/Shop';
import '../styles/Table.scss';

function Table({ total }: { total?: number }) {
  const path = useLocation().pathname;
  const { state } = useContext(ShopContext);

  if (state.length <= 0) {
    return <h3>You don't have any products yet.</h3>;
  }

  return (
    <table id='table'>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Amount</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {state.map((order: IShop) => (
          <TableRow key={`${order.id}_${order.name}`} product={order} />
        ))}
      </tbody>
      {path === '/checkout' && (
        <tfoot>
          <tr>
            <td colSpan={2}></td>
            <td style={{ fontWeight: 'bold' }}>$ {total}</td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}

export default Table;

function TableRow({
  product,
}: {
  product: Pick<IShop, 'name' | 'amount' | 'total'>;
}) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.amount}</td>
      <td>$ {product.total}</td>
    </tr>
  );
}
