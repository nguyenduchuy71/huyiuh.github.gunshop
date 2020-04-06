import React from 'react';
import ProductListPage from './page/ProductListPage/ProductListPage';
import NotFoundPage from './page/NotFoundPage/NotFoundPage';
import CartListPage from './page/CartListPage/CartListPage';
import HomePage from './page/Homepage/HomePage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />

    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <CartListPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];
export default routes;