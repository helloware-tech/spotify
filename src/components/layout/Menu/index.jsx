import MenuOption from '../../common/MenuOption';
import './style.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import { useDataLayerValue } from '../../../utility/DataLayer';



const Menu = () => {

  const [{playLists}] = useDataLayerValue()

  console.log('playLists >>> ',playLists );
	return (
    <div className='menu'>
      <img 
      className='menu__logo'
      src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png" alt="" />
      <MenuOption Icon={HomeRoundedIcon } text='Home'/>
      <MenuOption Icon={ SearchRoundedIcon }text='Search'/>
      <MenuOption  Icon={PlaylistPlayRoundedIcon} text='Your Library'/>
      <br/>
      <strong className='menu_title'>PLAYLISTS</strong>
      <hr/>
      {
        playLists?.items?.map((playLists)=>(
          <MenuOption  key={playLists.name} text={playLists.name}/>
        ))

      }

      

    </div>
  )
};

export default Menu;
