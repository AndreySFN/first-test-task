import { About, Container, Error404, Home, Info, Initializer, ServerError } from 'pages';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export enum Pathes {
  ERROR = 'error',
  ERROR_404 = 'error404',
  UNKNOWN_ERROR = 'unknown/error',
  ABOUT = 'about',
  INFO = 'info',
}

export const Routing = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: `/${Pathes.UNKNOWN_ERROR}`,
          element: <ServerError />,
        },
        {
          path: '/',
          element: <Initializer />,
          children: [
            {
              path: ':locale',
              children: [
                {
                  path: Pathes.ERROR_404,
                  element: <Error404 />,
                },
                {
                  path: Pathes.ERROR,
                  element: <ServerError />,
                },
                {
                  path: '',
                  element: <Container />,
                  children: [
                    {
                      path: '',
                      element: <Home />,
                    },
                    {
                      path: Pathes.ABOUT,
                      element: <About />,
                    },
                    {
                      path: Pathes.INFO,
                      element: <Info />,
                    },
                  ],
                },
                {
                  path: '*',
                  element: <Error404 />,
                },
              ],
            },
          ],
        },
        {
          path: '/*',
          element: <Error404 />,
        },
      ])}
    />
  );
};
