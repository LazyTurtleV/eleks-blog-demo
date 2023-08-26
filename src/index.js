import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';import { AuthContext } from './Contexts/AuthContext';
;

const router = createBrowserRouter([
  {
    path: '/',
    loader () {
      throw new redirect('stories')
    }
  },
  {
    path: 'stories',
    element: <div>stories</div>
  },
  {
    element: <div>s</div>,
    path: '/stories/:storyId',
    element: <div>A particular story</div>
  },
  {
    path: 'login',
    element: <div>Login</div>
  },
  {
    path: 'signup',
    element: <div>sign up</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}/>
    </AuthContext>
  </React.StrictMode>
);