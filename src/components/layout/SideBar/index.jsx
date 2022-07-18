import SideBarOption from '../../common/SideBarOption';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import './style.css';
const SideBar = () => {
	return (
		<nav>
			<div>
				<img
					className='imageLogo'
					src='https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png'
				/>
			</div>

			<div  className='container-unlist'>
				<div className='unlist'>
					<div>
						<SideBarOption
							icon={<HomeRoundedIcon fontSize='large' />}
							className='li'
							title='Inicio'
						/>
						<SideBarOption
							icon={<SearchRoundedIcon fontSize='large' />}
							className='li'
							title='Buscar'
						/>
						<SideBarOption
							icon={<PlaylistPlayRoundedIcon fontSize='large' />}
							className='li'
							title='Tu Biblioteca'
						/>
					</div>

					<div>
						<SideBarOption
							icon={<AddBoxRoundedIcon fontSize='large' />}
							className='li'
							title='Crear playlist'
						/>
						<SideBarOption
							icon={<FavoriteRoundedIcon fontSize='large' />}
							className='li'
							title='Tus me gusta'
						/>
					</div>
				</div>

				<div  className='unlist'>
					<SideBarOption className='li-2' title='Cookies' />
					<SideBarOption className='li-2' title='Privacidad' />
				</div>
			</div>
		</nav>
	);
};

export default SideBar;
