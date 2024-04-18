import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const Register = Loadable(lazy(() => import('../views/auth/Register')));
const Login = Loadable(lazy(() => import('../views/auth/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/auth/login" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
    ],
  },
];

export default Router;
