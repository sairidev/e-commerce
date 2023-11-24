import Counter from './Counter';
import { IProduct } from '../utils/definitions';
import '../styles/Card.scss';

function Card({ product }: { product: IProduct }) {
  return (
    <div id='card'>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Counter productID={product.id} />
    </div>
  );
}

export default Card;
