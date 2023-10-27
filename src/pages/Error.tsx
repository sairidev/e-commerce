import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Error.scss';

function Error() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      return navigate('/');
    }, 1000);
  }, []);

  return (
    <div id='error'>
      <h2>
        Error <span>404</span>
      </h2>
      <Link to={'/'}>
        <p>back home</p>
      </Link>
    </div>
  );
}

export default Error;
