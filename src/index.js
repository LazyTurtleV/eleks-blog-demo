import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <div>s</div>,
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
    <RouterProvider router={router}/>
  </React.StrictMode>
);