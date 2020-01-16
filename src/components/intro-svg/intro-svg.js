import React from 'react';
import Logo from './undraw_code_thinking_1jeh.svg';
import './intro-svg.css';

function IntroSvg() {
    return (
        <div className="intro-svg-container">
            <img src={Logo} alt="swag" className="intro-svg"></img>
        </div>
    );
}

export default IntroSvg;