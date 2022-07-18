import { useDataLayerValue } from '../../../utility/DataLayer';
import MiniHeader from '../MIniHeader';
import './style.css';


const Body = ({ spotify }) => {
	const [{discoverWeekly}]=useDataLayerValue()


	return (
		<div className='body'>
			<MiniHeader spotify={spotify} />

			<div className='body__info'>
				<img src={discoverWeekly?.images[0].url} />

				<div className='body__infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p> {discoverWeekly?.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Body;
