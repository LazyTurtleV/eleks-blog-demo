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
    element: <div>A particular story</div>,
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
    path: 'profile',
    element: <div>Profile</div>,
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
