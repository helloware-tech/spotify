import { NavLink } from 'react-router-dom';
import './style.css';

const Button = ({ children, title = '', className = '', ...props }) => {
	return (
		<NavLink to={props.to || ''} className={` ${className || ''}`} {...props}>
			{children || title}
		</NavLink>
	);
};

export default Button;
