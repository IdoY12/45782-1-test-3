import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {

    return (
        <div className='Header'>
            <div>logo</div>
            <nav>
                <NavLink to="/home">main</NavLink> | <NavLink to="/adding">add Site</NavLink>
            </nav>
            <div>
                welcome 
            </div>
        </div>
    );
}