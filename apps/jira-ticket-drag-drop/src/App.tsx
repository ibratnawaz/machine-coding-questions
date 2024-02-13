import { useState } from 'react';
import { BoardContextProvider, statesList } from './app.context';
import './App.css';
import { StateColumns } from './StateColumns';

function App() {
	const [states] = useState<string[]>([...statesList]);

	return (
		<BoardContextProvider>
			<>
				<h1 className='app-heading'>React Drag & Drop</h1>
				<main>
					{states.map((state) => (
						<StateColumns state={state} key={state} />
					))}
				</main>
			</>
		</BoardContextProvider>
	);
}

export default App;
