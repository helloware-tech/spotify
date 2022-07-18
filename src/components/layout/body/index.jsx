import { useDataLayerValue } from '../../../utility/DataLayer';
import MiniHeader from '../MIniHeader';
import './style.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from '../../songs/SongRow/SongRow';

const Body = ({ spotify }) => {
	const [{ discoverWeekly }] = useDataLayerValue();

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

			<div className='body__songs'>
				<div className='body__icons'>
					<PlayCircleFilledIcon className='body__shuffle' />
					<FavoriteIcon fontSize='large' />
					<MoreHorizIcon />
				</div>

					{discoverWeekly?.tracks.items.map(item=>(
						<SongRow key={item.track} track={item.track} />
					))}


			</div>
		</div>
	);
};

export default Body;
