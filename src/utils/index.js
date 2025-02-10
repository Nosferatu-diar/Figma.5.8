import Analytics from '../pages/analytics'
import Customer from '../pages/customers'
import Home from '../pages/home'
import Order from '../pages/orders'
import 'boxicons'
import Product from '../pages/products'
export const navbar_links = [
	{
		id: 1,
		path: '/',
		links: 'Home',
		Component: Home,
	},
	{
		id: 2,
		path: '/order',
		links: 'Orders',
		Component: Order,
	},
	{
		id: 3,
		path: '/product',
		links: 'Products',
		Component: Product,
	},
	{
		id: 4,
		path: '/customer',
		links: 'Customers',
		Component: Customer,
	},
	{
		id: 5,
		path: '/analytic',
		links: 'Analytics',
		Component: Analytics,
	},
]
