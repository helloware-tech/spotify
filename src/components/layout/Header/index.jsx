import Button from '../../../components/common/Button/index';
import IconButton from '../../common/IconButton/Index';
import './index.css';

const Header = () => {
	return (
	
			<header>
				<div>
					<div className='header-rigth'>
						<IconButton></IconButton>
						<IconButton></IconButton>
					</div>
				</div>

				<div className='header-left'>
					<Button className='textButton hover'>Premium</Button>
					<Button className='textButton hover'>Help</Button>
					<Button className='textButton hover'>Download</Button>
					<div className='space'></div>
					<Button to='signup' className='textButton hover' title='SignUp' />
					<Button to='login' className='login-button' title='Inciar Sesion' />
				</div>
			</header>
	
	);
};

export default Header;
