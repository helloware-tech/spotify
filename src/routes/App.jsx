/* import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; */

/* import i18n from 'i18next'; */

/* import Layout from '../components/layout/layout/Layout';
import Player from '../views/Player'
import Home from '../views/Home'; */

import Login from '../views/Login';
import Player from '../views/Player'
import { useEffect} from 'react';
import { getTokenfromUrl } from '../utility/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue } from '../utility/DataLayer'

const spotify = new SpotifyWebApi();

/*
const LayoutContainer = ({ component }) =>(<Layout>{component}</Layout>) ; */

function App() {

	const [{user,token},dispatch] = useDataLayerValue()

	useEffect(() => {
		const hash = getTokenfromUrl();
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type:'SET_TOKEN',
				token: _token
			});
		

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) =>{
				console.log(user)

			dispatch({
				type: 'SET_USER',
				user 
			
			})
		})
		}


	}, []);


	console.log('user >>> ', token);
	console.log('user >>> ', user);

	return (
		/* 		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<Routes>
	
					<Route exact path='/' element={<LayoutContainer component={<Home />} />} />
					<Route exact path='/player' element={<Player />} />
					<Route exact path='/login' element={<Login />} />

		
				</Routes>
			</BrowserRouter>

		</I18nextProvider> */
		<div>{token ? <Player spotify={spotify} /> : <Login></Login>}</div>
	);
}

export default App;
