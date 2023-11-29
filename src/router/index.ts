import { createBrowserRouter } from 'react-router-dom';

export enum RouterPath {
  ROOT = '/',
}

export const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    lazy: async () => {
      const PageRoot = await import('@/pages');
      return { Component: PageRoot.default };
    },
  },
]);
