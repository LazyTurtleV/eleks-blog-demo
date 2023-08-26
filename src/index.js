import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import Header from './Pages/Common/Header';
import Login from './Pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    loader() {
      throw new redirect('stories');
    },
  },
  {
    path: 'stories',
    element: <div>stories</div>,
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
    element: <div>sign up</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div
      style={{ flexDirection: 'column', display: 'flex', alignContent: 'end' }}
    >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
