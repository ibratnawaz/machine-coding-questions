import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './App.context';
import Products from './Products';
import Cart from './Cart';

export const App = () => {
	return (
		<AppContextProvider>
			<>
				<Cart />
        <Products />
			</>
		</AppContextProvider>
	);
};
