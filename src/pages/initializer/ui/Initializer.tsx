import { FullSizeSpinner } from 'entities';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useInitialize } from '../hooks/useInitialize';

export const Initializer = () => {
  const { isLoaded } = useInitialize();
  return isLoaded ? <Outlet /> : <FullSizeSpinner />;
};
