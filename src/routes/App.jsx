import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';

import Layout from '../components/layout/Layout';

import Home from '../views/Home';
import SignUp from '../views/SignUp';

const LayoutContainer = ({ component }) => <Layout>{component}</Layout>;

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<LayoutContainer component={<Home />} />} />
					<Route exact path='/signUp' element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</I18nextProvider>
	);
}

export default App;
