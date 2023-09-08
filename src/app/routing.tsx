import { About, Container, Error, Error404, Home, Info, Initializer } from 'pages';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const Routing = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Initializer />,
          children: [
            {
              path: ':locale',
              element: <Container />,
              children: [
                {
                  path: '',
                  element: <Home />,
                },
                {
                  path: 'about',
                  element: <About />,
                },
                {
                  path: 'info',
                  element: <Info />,
                },
              ],
            },
          ],
        },
        {
          path: '/404',
          element: <Error404 />,
        },
        {
          path: '/error',
          element: <Error />,
        },
        {
          path: '*',
          element: <Error404 />,
        },
      ])}
    />
  );
};
