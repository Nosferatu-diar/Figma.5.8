import { Link, useLocation } from 'react-router-dom'
import { navbar_links } from '../../utils'
import 'boxicons/css/boxicons.min.css' // Boxicons CSS faylini import qiling

const icons = icon => {
	switch (icon.toLowerCase()) {
		case 'home':
			return 'bx bx-home-alt'
		case 'orders':
			return 'bx bx-cart'
		case 'products':
			return 'bx bx-package'
		case 'customers':
			return 'bx bx-user'
		case 'analytics':
			return 'bx bx-bar-chart-alt-2'
		default:
			return 'bx bx-home'
	}
}

const Navbar = () => {
	const { pathname } = useLocation()

	return (
		<div className='flex flex-col justify-between items-center h-full'>
			<div>
				{navbar_links.map(value => (
					<Link
						key={value.id}
						to={value.path}
						className={`p-4 text-3xl flex items-center ${
							pathname === value.path ? '!text-black' : 'text-gray-600'
						}`}
					>
						<i
							title={value.links}
							className={`${icons(value.links)}   pr-2`}
						></i>
					</Link>
				))}
			</div>
			<div className='pb-4'>
				<i
					title='Settigs'
					className='bx bx-cog text-3xl cursor-pointer text-gray-600'
				></i>
			</div>
		</div>
	)
}

export default Navbar
