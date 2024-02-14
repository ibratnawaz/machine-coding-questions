import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

export const dummyProduct = {
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

export type TInitialState = {
	products: Product[];
	startIndex: number;
	paginationSize: number;
	paginationBtnSize: number;
	setPaginationStartIndex: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext({} as TInitialState);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
	const [products, setProducts] = useState([] as Product[]);
	const [paginationSize] = useState(10);
	const [startIndex, setPaginationStartIndex] = useState(0);
	const [paginationBtnSize, setPaginationBtnSize] = useState(0);

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then((res) => res.json())
			.then((res) => {
				setProducts(res.products);
				setPaginationBtnSize(Math.ceil(res.products.length / paginationSize));
			})
			.catch(console.error);
	}, []);

	return (
		<AppContext.Provider
			value={{
				paginationSize,
				products,
				startIndex,
				paginationBtnSize,
				setPaginationStartIndex,
			}}>
			{children}
		</AppContext.Provider>
	);
};
