import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../navbar'
// import { useState } from 'react'
// import { products } from '../../utils/pruducts'
const MainLayout = () => {
	const navigate = useNavigate()
	// const [data, setData] = useState(products)
	// const handleActivate = () => {
	// 	const updatedData = data.map(product => ({ ...product, active: true }))
	// 	setData(updatedData)
	// }
	return (
		<>
			<div className='flex'>
				<header className='w-[100px] fixed h-screen top-0 left-0  border-r border-gray-200 bg-[#eee1fe]'>
					<div className='flex flex-col  items-center h-full'>
						<Navbar />
					</div>
				</header>
				<main className='w-full ml-[100px]'>
					<div className='flex border-b border-gray-200 p-6 items-center justify-between bg-[#eee1fe61]'>
						<div className='flex items-center gap-4'>
							<button className='flex items-center gap-2 text-gray-600 focus:text-black cursor-pointer'>
								Dashboard
								<i className='bx bx-chevron-right'></i>
							</button>
							<button className='flex items-center gap-2 text-gray-600 focus:text-black cursor-pointer'>
								Products
								<i className='bx bx-chevron-right'></i>
							</button>
							<button className='flex items-center gap-2 text-gray-600 focus:text-black cursor-pointer'>
								All products
								<i className='bx bx-chevron-right'></i>
							</button>
						</div>
						<div className='flex items-center gap-5'>
							<form
								className='flex items-center gap-3 border bg-white border-gray-400 rounded-lg p-2'
								action=''
							>
								<i className='bx bx-search-alt-2'></i>
								<input
									className='outline-none w-[400px]'
									type='text'
									placeholder='Search'
								/>
							</form>
							<div className='border bg-white border-gray-400 rounded-full py-2 px-3 cursor-pointer hover:bg-gray-200'>
								<i className='bx bx-user'></i>
							</div>
						</div>
					</div>
					<div className='flex flex-col bg-[#e1eefb] w-full '>
						<div className='flex items-center justify-between px-6 py-1'>
							{/* Nav Btns */}
							<div className='flex items-center gap-3'>
								<button
									className='text-gray-600 border py-1 px-3 rounded-lg border-blue-200 focus:bg-white cursor-pointer focus:text-black'
									onClick={() => navigate('/product')}
								>
									All
								</button>
								<button className='text-gray-600 py-1 px-3 border rounded-lg border-blue-200 focus:bg-white cursor-pointer focus:text-black'>
									Active
								</button>
								<button className='text-gray-600 py-1 px-3 border rounded-lg border-blue-200 focus:bg-white cursor-pointer focus:text-black'>
									Drafts
								</button>
								<button className='text-gray-600 py-1 px-3 border rounded-lg border-blue-200 focus:bg-white cursor-pointer focus:text-black'>
									Archived
								</button>
							</div>
							<div className='flex items-center gap-4'>
								<button className='hover:bg-gray-100 flex items-center gap-2 bg-white py-1 px-2 rounded-lg text-black cursor-pointer'>
									<i className='bx bx-file-blank'></i>Export
								</button>
								<button className='hover:bg-[#111111b8] flex items-center gap-2 text-white bg-black py-1 px-2 rounded-lg  cursor-pointer'>
									<i className='bx bx-plus-circle'></i>Add product
								</button>
							</div>
						</div>
						<div className='w-full  '>
							<div className='m-6 p-5 rounded-lg bg-[white] mt-10'>
								<div className='flex items-center'>
									<p className='text-black ml-32'>Brand</p>
									<p className='text-black ml-47'>Name</p>
									<p className='text-black ml-50'>Status</p>
									<p className='text-black ml-16'>Price</p>
									<p className='text-black ml-15'>Discount</p>
									<p className='text-black ml-12'>Created data</p>
									<p className='text-black ml-22'>Edit</p>
									<p className='text-black ml-20'>Delete</p>
								</div>
								<div className='overflow-y-auto h-[550px]'>
									<Outlet />
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default MainLayout
