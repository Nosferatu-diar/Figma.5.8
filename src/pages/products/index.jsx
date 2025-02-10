import { useState, useEffect } from 'react'
import { products } from '../../utils/pruducts'
import Card from './cards'
const Product = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(products)
	}, [])
	const handleDelete = id => {
		const newData = data.filter(value => value.id !== id)
		setData(newData)
	}

	return (
		<div>
			<div className='grid grid-cols-1 gap-4 mt-5'>
				{data.map(value => (
					<Card
						key={value.id}
						{...value}
						onDelete={() => handleDelete(value.id)}
					/>
				))}
			</div>
		</div>
	)
}
export default Product
