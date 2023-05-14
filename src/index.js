import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import NavBar from './components/NavBar/navBar';
import CartWidget from './components/CartWidget/cartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<ItemListContainer/>
  },
  {
    path:"/cart",
    element: <CartWidget/>
  },
  {
    path:"/category/:id",
    element: <ItemListContainer/>
  },
  {
    path:"/item/:id",
    element: <ItemDetailContainer/>
  }
  //,
  // {
  //   path:"/checkout",
  //   element: <div>Hello world!</div>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
