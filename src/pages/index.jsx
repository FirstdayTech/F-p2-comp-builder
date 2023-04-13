import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout';
import { Navigate } from 'react-router-dom';
import MyComps from './MyComps';
import Champtions from './Champions';
import CreateComposition from './CreateComposition';
import EditComposition from './EditComposition';
import ViewComp from './ViewComp';

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
        element: <MyComps />,
      },
      {
        path: '/champions',
        element: <Champtions />
      },
      {
        path: '/create',
        element: <CreateComposition />
      },
      {
        path: '/edit/:name',
        element: <EditComposition />
      },
      {
        path: '/view/:name',
        element: <ViewComp />
      }
    ]
  },
]);

export default router;