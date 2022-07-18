import './style.css';
const MenuOption = ({ text, Icon }) => {
	return <div className='menuOption'>
    
    {Icon&& <Icon className='menuOption__icon' fontSize='large'/>}
    {Icon ? <h4>{text}</h4> : <p>{text}</p>}
    
    </div>;
};

export default MenuOption;
