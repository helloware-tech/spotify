import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../../../utility/DataLayer';
const MiniHeader = () => {
	const [{ user }] = useDataLayerValue();

	return (
		<div className='miniHeader'>
			<div className='miniHeader__left'>
				<SearchIcon />
				<input placeholder='Search' type='text' />
			</div>

			<div className='miniHeader__right'>
				<Avatar src={user?.images[0]?.url} />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default MiniHeader;
