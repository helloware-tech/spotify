import './style.css';
import Menu from '../Menu';
import Body from '../body';
import Footer from '../Footer';
const Player = ({ spotify }) => {
	return (
		<div className='player'>
			<div className='player__body'>
				<Menu />
				<Body spotify={spotify} />
			</div>
			<Footer />
		</div>
	);
};

export default Player;
