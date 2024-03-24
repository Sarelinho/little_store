import React from 'react';
import { NavLink } from 'react-router-dom';
import '/src/Style/Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">חנות</NavLink></li>
                    <li><NavLink to="/cart">עגלת קניות</NavLink></li>
                    <li><NavLink to="/admin">כניסה למנהל</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
