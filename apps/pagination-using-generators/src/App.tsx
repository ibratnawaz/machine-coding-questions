import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

type TResponse = {
	hasNextPage: boolean;
	items: string[];
	itemsPerPage: number;
	message: string;
	nextPage: number;
	status: number;
	totalItems: number;
};

function App() {
	const genRef = useRef<AsyncGenerator<TResponse | { error: unknown }, never, number>>();
	const [data, setData] = useState({} as TResponse);
	const [btnCount, setBtnCount] = useState(0);

	useEffect(() => {
		genRef.current = asyncGetContent(1);
		genFn();
	}, []);

	async function fetchData(nextPage: number) {
		const resp = await fetch(`http://localhost:8080/api/list?nextPage=${nextPage}`, {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Headers': '*',
			},
		});
		const response = await resp.json();
		return response as TResponse;
	}

	const asyncGetContent = async function* (arg = 1) {
		while (true) {
			try {
				const response = await fetchData(arg);
				arg = yield response;
			} catch (e) {
				console.warn(`exception during fetch`, e);
				yield { error: e };
			}
		}
	};

	const genFn = useCallback(async (page: number = 1) => {
		if (genRef.current) {
			const resp = await genRef.current.next(page);
			const data = resp.value as TResponse;
			setData(data);
			if(page === 1) {
				const totalBtn = Math.ceil(data.totalItems / data.itemsPerPage);
				setBtnCount(totalBtn);
			}
			return data;
		}
	}, []);

	const changePage = (to: number) => {
		genFn(to);
	};

	return (
		<div>
			<ul style={{ textAlign: 'left' }}>
				{data.items ? data.items.map((v) => <li key={v}>{v}</li>) : null}
			</ul>
			<br />
			<Buttons changePage={changePage} btnCount={btnCount} />
		</div>
	);
}

type PropsType = {
	changePage: (id: number) => void;
	btnCount: number;
};
function Buttons({ changePage, btnCount }: PropsType) {
	const buttons = [];

	for (let i = 1; i <= btnCount; i++) {
		buttons.push(
			<button onClick={(e) => changePage(+e.currentTarget.value)} key={'btn-' + i} value={i}>
				{i}
			</button>
		);
	}

	return <div className='btn-container'>{buttons}</div>;
}

export default App;
