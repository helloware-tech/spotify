import { useTranslation } from 'react-i18next';

import Button from '../../common/Button';

import './style.css';

const FooterAdvice = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<div className='footer-right'>
				<p> Muestra de Spotify</p>
				<p>
					{' '}
					Regístrate para acceder a canciones y podcasts ilimitados con algunos anuncios.
					No necesitas tarjeta de crédito.
				</p>
			</div>
			<div className='footer-left'>
				<Button title={t('signup')} />
			</div>
		</footer>
	);
};

export default FooterAdvice;
