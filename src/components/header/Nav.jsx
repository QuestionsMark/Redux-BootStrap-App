import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return ( 
        <menu className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink to="/" className="menu__link" aria-current="page">Home</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/users" end className="menu__link">Użytkownicy</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/anime" end className="menu__link">Anime</NavLink>
                </li>
            </ul>
        </menu>
     );
}
 
export default Nav;