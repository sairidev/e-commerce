import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/index.tsx';
import Products from './context/Products.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Products>
      <Router />
    </Products>
  </React.StrictMode>
);
