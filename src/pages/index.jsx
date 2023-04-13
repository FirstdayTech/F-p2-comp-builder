import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout';
import { Navigate } from 'react-router-dom';
import MyComps from './MyComps';
import Champtions from './Champions';
import CreateComposition from './CreateComposition';
import EditComposition from './EditComposition';
import ViewComp from './ViewComp';
import Login from './auth/Login';
import AuthLayout from './auth/layout';
import { useGlobalContext } from '../contexts/global';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/auth/login" replace />
      },
      {
        path: '/my-comps',
        element: <Protected><MyComps /></Protected>,
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
        element: <ViewComp />,
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      }
    ]
  }
]);

function Protected({ children }) {
  const { user } = useGlobalContext();
  if (user.get().auth) {
    return children;
  } else {
    return <Navigate to="/auth/login" replace />;
  }
}



export default router;