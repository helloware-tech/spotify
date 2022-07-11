import  './style.css'

const SongItem = ({ songTitle, songSubTitle,imageId }) => {

	const image = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teacup-head-album-song-cover-art-design-template-f9150441441d678a29cb5bdb8d2f7cae_screen.jpg?ts=1635262515'
	return (

		<div className='card bg-dark justify-content-center'>

			<div className='image-card-container' >
			<img src={image} alt='Card image'  className='image-card' />
			<a href='#' className='image-card-button'> boton </a>
			</div>

			<div className='card-body'>
				<h5 className='card-title'>{songTitle}</h5>
				<p className='card-text'>{songSubTitle}</p>
			</div>

		</div>
	);
};

export default SongItem;
