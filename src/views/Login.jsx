import '../styles/Login.css'
import { loginUrl } from '../utility/spotify';

const Login = () => {
	return (
		<div className="login">
			<div>
				<img
					className='image-logo-login'
					src='https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png'
				/>
			</div>
	
			<div className='d-grid gap-8 col-6 mx-auto '>
				<a href={loginUrl} className='btn btn-success p-4 '>Log in with spotify</a>
			</div>
		</div>
	);
};
export default Login;
