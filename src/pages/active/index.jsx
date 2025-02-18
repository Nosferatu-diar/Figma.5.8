import { useState, useEffect } from 'react'
import { products } from '../../utils/pruducts'
import Card from '../../pages/products/cards/index'

const Active = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const activeProducts = products.filter(product => product.active)
		setData(activeProducts)
	}, [])

	const handleDelete = id => {
		const newData = data.filter(value => value.id !== id)
		setData(newData)
	}

	return (
		<div>
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
		</div>
	)
}

export default Active
