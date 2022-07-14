import Header from './Header/';
import Nav from './Nav';
import FooterAdvice from './FooterAdvice';

const Layout = ({ children }) => {
	return (
		<section className='d-flex'>
			<Nav />
			<div>
				<Header />
				{children}
			</div>
			<FooterAdvice />
		</section>
	);
};

export default Layout;
