import SongItem from '../SongItem/SongItem';

const SongItemCard = ({ title, subTitle, seeAll }) => {
	return (
/* 		//!	 se puede automatizar con un array de cards con los datos  */
		<>
			<div className='d-flex flex-column'>
				<div className='row'>
					<div>
						<div className='display-5'>{title}</div>
					</div>

					<div className='d-flex justify-content-between p-2'>
						<div>{subTitle}</div>
						<div>{seeAll}</div>
					</div>
				</div>

				<div className='row pt-4 p-5 justify-content-between'>
					<div className='col-md-3'>
						<SongItem songTitle='Canciones Animadas' songSubTitle='loremghjfhgjfhgjfhgjfhgjfhgjfhgjfhgjfghjfghjfgh'></SongItem>
					</div>
					<div className='col-md-3'>
						<SongItem></SongItem>
					</div>
					<div className='col-md-3'>
						<SongItem></SongItem>
					</div>
					<div className='col-md-3 mb-5'>
						<SongItem></SongItem>
					</div>

					<div className='col-md-3'>

					</div>
				</div>

			</div>

		</>
	);
};

export default SongItemCard;
