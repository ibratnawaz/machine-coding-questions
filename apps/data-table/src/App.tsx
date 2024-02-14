import { useContext } from 'react';
import { AppContext, AppContextProvider } from './App.context';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyProduct = {
	brand: 'Apple',
	category: 'smartphones',
	description: 'An apple mobile which is nothing like apple',
	discountPercentage: 12.96,
	id: 1,
	images: ['https://cdn.dummyjson.com/product-images/1/1.jpg'],
	price: 549,
	rating: 4.69,
	stock: 94,
	thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
	title: 'iPhone 9',
};

export type Product = typeof dummyProduct;

export const App = () => {
	return (
		<AppContextProvider>
			<>
				<Table />
				<br />
				<Pagination />
			</>
		</AppContextProvider>
	);
};

export const Table = () => {
	const { products, startIndex, paginationSize } = useContext(AppContext);

	return (
		<table className='container mt-4 table table-secondary'>
			<thead>
				<tr>
					{Object.keys(dummyProduct)
						.sort()
						.map((header) => (
							<th key={header}>{header}</th>
						))}
				</tr>
			</thead>

			<tbody>
				{products.map((product, index) => {
					if (index < startIndex || index > startIndex + paginationSize - 1) {
						return null;
					}
					return (
						<tr key={`${product.id}_${index}`} id={`${product.id}`}>
							{Object.keys(product)
								.sort()
								.map((key, innerIndex) => {
									return (
										<td key={`${product.id}_${key}_${innerIndex}`}>
											{product[key as keyof typeof dummyProduct]}
										</td>
									);
								})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export const Pagination = () => {
	const { paginationBtnSize, setPaginationStartIndex, paginationSize } = useContext(AppContext);
	return (
		<>
			{new Array(paginationBtnSize).fill(0).map((_, index) => {
				return (
					<button
						className='btn btn-primary mx-1 mb-5'
						key={`pagination_${index}`}
						onClick={() => setPaginationStartIndex(index * paginationSize)}>
						{index + 1}
					</button>
				);
			})}
		</>
	);
};
