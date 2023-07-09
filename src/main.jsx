import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import NewClient from './pages/NewClient';
import Index, {loader as loaderIndex} from './pages/Index';

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
        loader: loaderIndex // Similar to useState from React-Router-DOM
      },
      {
        path: '/us',
        element: <h1>About Us</h1>
      },
      {
        path: '/clients/new',
        element: <NewClient/>
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
