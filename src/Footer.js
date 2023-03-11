import React from 'react';
import './Footer.css';
import ig_icon from './instagram icon.png';
import fb_icon from './facebook icon.png';
import logoImg from './blueprints_logo.png';


const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer_left">
            <div className="footer_text-wrapper">
                <p className="footer_text">Get in touch:</p>
                <p className="footer_text">contact@b4pglobal.org</p>
                <br />
                <p className="footer_text">Stay updated:</p>
            </div>

            <div className="footer_social_wrapper">
                <img className="footer_social" src={ig_icon} alt=""></img>
                <img className="footer_social" src={fb_icon} alt=""></img>
            </div>
      </div>

      <img className= "footer_logo" src={logoImg} alt=""></img>

      <div className="footer__bottom">
        <p>©2020 Blueprint for Pangaea.</p>
        <p>All Rights Reserved.</p>
      </div>

      <div className="footer_line">
      </div>
    </footer>
    );
}

export default Footer;