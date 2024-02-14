import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Product } from './App';

type initialState = {
	products: Product[];
	startIndex: number;
	paginationSize: number;
	paginationBtnSize: number;
	setPaginationStartIndex: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext({} as initialState);

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
