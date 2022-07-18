import  './style.css'
const SongRow = ({ track }) => {
	return (
		<div className='songRow'>
			<img className="songRow__album" src={track.album.images[0].url} />
			<div className='songRow__info'>
				<h2>{track.name}</h2>
				<p>{track.artists.map((artist) => artist.name).join(', ')} -{' '} {track.album.name}</p>
			</div>
		</div>
	);
};

export default SongRow;
