import React from 'react';
import Logo from './undraw_code_thinking_1jeh.svg';
import './intro-svg.css';
import { motion } from 'framer-motion';

function IntroSvg() {
    return (
        <motion.div className="intro-svg-container" 
        initial={{
            opacity: 0,
            x: '100%'
        }}
        animate={{
            opacity:1,
            x: '0%'
        }}
        transition={{ 
            delay: 1
        }}
        >
            <img src={Logo} alt="swag" className="intro-svg"></img>
        </motion.div>
    );
}

export default IntroSvg;