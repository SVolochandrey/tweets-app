import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

export const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};
