import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/main-layout'
const Home = React.lazy(() => import('../pages/home'))
const Order = React.lazy(() => import('../pages/orders'))
const Product = React.lazy(() => import('../pages/products'))
const Analytic = React.lazy(() => import('../pages/analytics'))
const Customer = React.lazy(() => import('../pages/customers'))
export const root = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				// links: 'Home',
				element: <Home />,
			},
			{
				path: '/order',
				// links: 'Order',
				element: <Order />,
			},
			{
				path: '/product',
				element: <Product />,
			},
			{
				path: '/analytic',
				element: <Analytic />,
			},
			{
				path: '/customer',
				element: <Customer />,
			},
		],
	},
])
