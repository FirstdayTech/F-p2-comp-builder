import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout';
import { Navigate } from 'react-router-dom';

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
        element: <div>comps</div>
      },
      {
        path: '/champions',
        element: <div>champions</div>
      }
    ]
  },
]);

export default router;