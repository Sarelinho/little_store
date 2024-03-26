import React from 'react';
import { NavLink } from 'react-router-dom';
import '/src/Style/Header.css';

const Header = () => {
    return (
        <header>
                
                    <li className='Admin'><NavLink to="/admin">כניסה למנהל</NavLink></li>
                    <div className='shopButton'>
                    <li className='Shop'><NavLink to="/">חנות</NavLink></li>
                    <li className='Cart'><NavLink to="/cart">עגלת קניות</NavLink></li>
          
                    </div>
                   
        </header>
    );
}

export default Header;
