import Header from '../Header';
import SideBar from '../SideBar';
import FooterAdvice from '../FooterAdvice';
import './style.css';

const Layout = ({ children }) => {
	return (
		<section >
			<div className='layout'>
				<Header />
				{children}
			</div>
			<SideBar />
			<FooterAdvice />
		</section>
	);
};

export default Layout;
