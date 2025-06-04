import React from 'react';
import './Header.css';
import { FaRoad } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="app-header">
            <FaRoad className="header-icon" />
            <h1>The Infrastructure Thingy</h1>
        </header>
    );
};

export default Header;