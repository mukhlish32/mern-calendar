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
const Events = Loadable(lazy(() => import('../views/events/Events')))
// Check Auth
const AuthRoute = ({ element }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  };

  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', element: <AuthRoute element={<Dashboard />} /> },
      { path: '/events', element: <Events /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
    ],
  },
];

export default Router;
