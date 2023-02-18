import React from 'react';
import './Header.css';
import header_logo from './blueprints_logo.png';

const Header = ({imgLink}) => {
    return (
    <>
    <h1 className = 'header'>
        <img className="headerImg" src={header_logo} alt=""></img>
        <button className = 'headerBtn'>
            Our Chapters
        </button>
        <button className = 'headerBtn'>
            Shipments
        </button>
        <button className = 'headerBtn'>
            Executive Team
        </button>
        <button className = 'headerBtn'>
            Impact
        </button>
        <button className = 'headerBtn'>
            Home
        </button>
    </h1>
    </>
    );
};

export default Header;
