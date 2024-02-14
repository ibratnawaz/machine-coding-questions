import { useEffect, useState } from 'react';
import { DataTable } from './DataTable';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then((res) => res.json())
			.then((res) => {
				setProducts(res.products);
				setLoading(false);
			})
			.catch(console.error);
	}, []);

	if (loading) return <p>Loading...</p>;

	return <DataTable data={products} />;
};

export default Products;
