import SongItemCard from '../components/songs/SongItemCard/SongItemCard';
import '../styles/Home.css';
const Home = () => {
	return (
		<div className='home'>
			<SongItemCard title='Enfoque' subTitle='Para oir mejor' seeAll='Ver Todo' />
			<SongItemCard  title='Dormir' subTitle='Para oir mejor' seeAll='Ver Todo' />
			<SongItemCard />
			<SongItemCard />
			<SongItemCard />
			<SongItemCard />
			<div className='footer-space-1'></div>
			<div className='footer-space-line'></div>
			<div className='footer-space-2'>

			</div>
		</div>
	);
};

export default Home;
