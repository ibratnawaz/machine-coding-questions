import { useContext } from 'react';
import { FeatureContext, FeatureProvider } from './App.context';
import './App.css';
import { FeedbackDialog } from './features/feature-1';
import { ExtendedSummary } from './features/feature-2';

function App() {
	return (
		<FeatureProvider>
			<Main />
		</FeatureProvider>
	);
}

function Main() {
	const { loading } = useContext(FeatureContext);

	if (loading) return <p>Loading....</p>;
	return (
		<>
			<FeedbackDialog />
			<ExtendedSummary />
		</>
	);
}

export default App;
