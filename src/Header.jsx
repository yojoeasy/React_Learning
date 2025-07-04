import { NavLink } from 'react-router-dom';
import './Header.css';
function Header(){
    return(
        <>
            <nav>
                <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            </nav>
        </>
    )
}

export default Header;