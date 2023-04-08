import React from 'react';
import './Header.css';
import header_logo from './blueprints_logo.png';

function Header(props){
    const execClick = () => {
        props.setCurrentPage("exec");
    };
    const homeClick = () => {
        props.setCurrentPage("home");
    };
    return (
    <div>
    <img className="headerImg" src={header_logo} alt=""></img>
    <div className = 'header'>
        <button className = 'headerBtn' onClick={homeClick}>
            Home
        </button>
        <button className = 'headerBtn'>
            Impact
        </button>
        <button className = 'headerBtn' onClick={execClick}>
            Executive Team
        </button>
        <button className = 'headerBtn'>
            Shipments
        </button>
        <button className = 'headerBtn'>
            Our Chapters
        </button>
    </div>
    </div>
    );
};

export default Header;
