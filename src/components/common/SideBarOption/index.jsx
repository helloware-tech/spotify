import './style.css';


const SideBarOption = ({ icon, title = '', className = '', to }) => {
	return (
		<li to={to || ''} className={` ${className || ''}`}>
			{icon}
			<p className='p-nav'>{title}</p>
		</li>
	);
};

export default SideBarOption;
