import ReactDOM from 'react-dom/client';
import {DataLayer} from './utility/DataLayer';

import App from './routes/App';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer, { initialState } from './utility/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<DataLayer initialState={initialState} reducer={reducer}>
		<App />
	</DataLayer>
);
