import { useState, useEffect } from 'react'
import { products } from '../../utils/pruducts'
import Card from './cards'

const Product = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(products)
	}, [])

	const handleDelete = id => {
		setData(prevData => prevData.filter(value => value.id !== id))
	}

	const handleEdit = id => {
		const newTitle = prompt('Enter new name:')
		const newBrand = prompt('Enter new brand:')
		const newPrice = prompt('Enter new price:')
		const newDiscount = prompt('Enter new discount:')
		const newActive = prompt('The product is active? (true/false)')

		if (newTitle || newBrand || newPrice || newDiscount || newActive) {
			setData(prevData =>
				prevData.map(value =>
					value.id === id
						? {
								...value,
								title: newTitle || value.title,
								brand: newBrand || value.brand,
								price: newPrice ? Number(newPrice) : value.price,
								discount: newDiscount ? Number(newDiscount) : value.discount,
								active: newActive
									? newActive.toLowerCase() === 'true'
									: value.active,
						  }
						: value
				)
			)
		}
	}

	return (
		<div>
			<div className='grid grid-cols-1 gap-4 mt-5'>
				{data.map(value => (
					<Card
						key={value.id}
						{...value}
						onDelete={() => handleDelete(value.id)}
						onEdit={() => handleEdit(value.id)}
					/>
				))}
			</div>
		</div>
	)
}

export default Product
