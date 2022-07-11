import { NavLink } from 'react-router-dom';
import Button from '../../../components/common/Button/index';
import IconButton from '../../common/IconButton/Index';
import './index.css';

const Header = () => {

	return (
		<header className='header'>
			<div>
				<div className='header-rigth'>
					<IconButton></IconButton>
					<button className='button-right'>
						Es
					</button>
				</div>
			</div>

			<div className='header-left'>
				<button className='button-left'>Premium</button>
				<button className='button-left'>Help</button>
				<button className='button-left'>Download</button>
				<div className='space'></div>
				<NavLink to='Singup' className='button-left'>SingUp</NavLink>
				<Button title='Inciar Sesion' ></Button>
			</div>
		</header>
	);
};

export default Header;
