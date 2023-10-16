import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import Login from './Pages/Login';
import { AuthContext } from './Contexts/AuthContext';
import Signup from './Pages/Signup';
import Stories from './Pages/Stories';
import Story from './Pages/Story';
import Add from './Pages/Add';
import Profile from './Pages/Profile';
import GuardRoute from './Pages/Common/GuardRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuardRoute />,
    children: [
      {
        path: '/',
        loader() {
          return redirect('stories');
        },
      },
      {
        path: 'add',
        element: <Add />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'stories',
        element: <Stories />,
      },
      {
        path: '/stories/:storyId',
        element: <Story />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}/>
    </AuthContext>
  </React.StrictMode>
);
