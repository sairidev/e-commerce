import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Checkout from '../pages/Checkout';
import Error from '../pages/Error';
import Layout from '../components/Layout';

const routes = [
  { path: '/', component: App, layout: Layout },
  {
    path: '/checkout',
    component: Checkout,
    layout: Layout,
  },
  {
    path: '*',
    component: Error,
  },
];

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.layout ? (
                <route.layout>
                  <route.component />
                </route.layout>
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
