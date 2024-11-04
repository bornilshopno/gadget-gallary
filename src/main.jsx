import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage';
import Home from './assets/Components/Home/Home';
import Dashboard from './assets/Components/Dashboard/Dashboard';
import Stats from './assets/Components/Stats/Stats';
import ProductDetail from './assets/Components/ProductDetails/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    loader:()=> fetch('/gadgetData.json'),
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {path:'/',
        loader: ()=>fetch('/category.json'),
        element: <Home></Home>,
     
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/stats',
        element: <Stats></Stats>
      },
      {
        path:'/:product_id',
        // loader:({params})=> fetch(`/gadgetData.json/${params.product_id}`),
        loader: async ({ params }) => {
          const response = await fetch('/gadgetData.json');
          const data = await response.json();
          const product = data.find((item) => item.product_id === params.product_id);
          return product;
      },      
        element:<ProductDetail></ProductDetail>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
