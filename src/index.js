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

const router = createBrowserRouter([
  {
    path: '/',
    loader() {
      throw new redirect('stories');
    },
  },
  {
    path: 'stories',
    element: <Stories />,
  },
  {
    path: '/stories/:storyId',
    element: <Story />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'add',
    element: <Add />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}/>
    </AuthContext>
  </React.StrictMode>
);
