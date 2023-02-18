import React from 'react';
import './Header.css';
import header_logo from './blueprints_logo.png';

const Header = () => {
    return (
    <>
    <img className="headerImg" src={header_logo} alt=""></img>
    <h1 className = 'header'>
        <button className = 'headerBtn'>
            Home
        </button>
        <button className = 'headerBtn'>
            Impact
        </button>
        <button className = 'headerBtn'>
            Executive Team
        </button>
        <button className = 'headerBtn'>
            Shipments
        </button>
        <button className = 'headerBtn'>
            Our Chapters
        </button>
    </h1>
    </>
    );
};

export default Header;
