import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout';
import { Navigate } from 'react-router-dom';
import MyComps from './MyComps';
import Champtions from './Champions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/my-comps" replace />
      },
      {
        path: '/my-comps',
        element: <MyComps />
      },
      {
        path: '/champions',
        element: <Champtions />
      }
    ]
  },
]);

export default router;