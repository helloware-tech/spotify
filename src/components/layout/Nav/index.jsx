import './Nav.css';
const Nav = () => {
	return (
		<nav>
			<div>
				<img src='https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png' />
			</div>

			<div>
				<ul className='btn btn-success'>
					<li>Inicio</li>
					<li>Buscar</li>
					<li>Tu Biblioteca</li>
				</ul>
				<div>
					<div> Crear playlist</div>
					<div> Tus me gusta</div>
				</div>
				<div>
					<div> Cookies</div>
					<div> Privacidad</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
