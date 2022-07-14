import Button from '../../common/Button';

import './style.css';

const FooterAdvice = () => {

	return (
		<footer>
			<div className='footer-right'>
				<p> Muestra de Spotify</p>
				<p>
	
					Regístrate para acceder a canciones y podcasts ilimitados con algunos anuncios.
					No necesitas tarjeta de crédito.
				</p>
			</div>
			<div className='footer-left'>
			<Button  to='/signup' className='login-button' title='Resgistrate'/>
			</div>
		</footer>
	);
};

export default FooterAdvice;
