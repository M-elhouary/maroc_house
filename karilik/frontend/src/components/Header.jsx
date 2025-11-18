import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling the header

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Karilik</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/listings">Listings</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;