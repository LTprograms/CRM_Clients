import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import NewClient, {action as NewClientAction} from './pages/NewClient';
import Index, {loader as loaderIndex} from './pages/Index';
import ErrorPage from './pages/ErrorPage';
import EditClient, {loader as loaderEditClient, action as actionEditClient} from './pages/EditClient';
import { action as deleteClientAction } from './components/RowClient';

/**
 * This is the router prompt expected by the Router Provider below.
 * It expects an object array with all configurations to our urls
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: loaderIndex, // Similar to useState from React-Router-DOM
        errorElement: <ErrorPage/>
      },
      {
        path: '/us',
        element: <h1>About Us</h1>
      },
      {
        path: '/clients/new',
        element: <NewClient/>,
        action: NewClientAction
      },
      {
        path: '/clients/:clientsID/edit',
        element: <EditClient/>,
        loader: loaderEditClient,
        action: actionEditClient,
        errorElement: <ErrorPage/>
      },
      {
        path: 'clients/:clientsID/delete',
        action: deleteClientAction
      }
    ]
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * RouterProvider provides functionalities for routing.
   * It expects a router prompt
   */
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
