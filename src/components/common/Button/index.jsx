import './style.css';

const Button = ({ children, title = '', className, color = 'primary', ...props }) => {
	return (
		<button className={`login-button ${className || ''} bg_${color}`} {...props}>
			{children || title}
		</button>
	);
};

export default Button;
