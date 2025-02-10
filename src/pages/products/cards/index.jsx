/* eslint-disable react/prop-types */
const Card = ({ image, title, price, active, discount, brand, onDelete }) => {
	return (
		<div className='flex items-center gap-3 hover:bg-gray-300 p-2 bg-[#e7e6e6] rounded-xl shadow-md'>
			<div className='w-[90px] h-[80px] rounded-xl'>
				<img className='w-full h-full object-cover' src={image} alt='img' />
			</div>
			<div className='w-[100px] ml-5'>
				<p className='text-lg font-semibold'>{brand}</p>
			</div>
			<div className='w-[250px] ml-10'>
				{title.length > 20 ? title.slice(0, 25) + '...' : title}
			</div>
			<div className='w-[80px] ml-10'>
				{active ? (
					<div className='bg-green-500 text-white text-center px-2 py-1 rounded-full'>
						Active
					</div>
				) : (
					<div className='bg-red-500 text-white text-center px-2 py-1 rounded-full'>
						Inactive
					</div>
				)}
			</div>
			<div className='w-[80px] ml-10'>
				<p className='font-semibold'>${price}</p>
			</div>
			<div className='ml-5 w-[40px]'>
				<p>{discount ? discount : '0'}</p>
			</div>
			<div className='w-[120px] pl-10'>
				<p>No data...</p>
			</div>
			<div className='flex items-center ml-10'>
				<button className='ml-5 bg-blue-500 text-white px-5 py-1 rounded-md cursor-pointer'>
					Edit
				</button>
				<button
					onClick={onDelete}
					className=' bg-red-700 text-white px-5 py-1 rounded-md ml-10 cursor-pointer'
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Card
