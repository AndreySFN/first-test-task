import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Error404, Home, Info } from './pages';
import { Container, Initializer } from './widgets';

//TODO: Сменить на CreateRouter (или типа того)
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
          path: '*',
          element: <Error404 />,
        },
      ])}
    />
  );
};
