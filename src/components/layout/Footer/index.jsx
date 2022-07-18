import './style.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
const Footer = () => {
  return (
    <div className='footer'>

    <div className='footer__left'>
        <img 
          className='footer__albumLogo'
          src='https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg'
        />
        <div className="footer__songInfo">
          <h4>Title Song</h4>
          <p>Name Singer</p>
        </div>

       
    </div>

    <div className="footer__center">

      <ShuffleIcon className='footer__green' />
      <SkipPreviousIcon className='footer__icon' />
      <PlayCircleOutlineIcon fontSize='large' className='footer__play footer__icon' />
      <SkipNextIcon className='footer__icon' />
      <RepeatIcon className='footer__green' />

    </div>

    <div className="footer__right">
        <Grid container  spacing={2}>
          <Grid  item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid  item>
            <VolumeDownIcon/>
          </Grid>

          <Grid  item xs>
           <Slider />
          </Grid>


        </Grid>
    </div>
      
    </div>
  )
}

export default Footer