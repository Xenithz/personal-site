import React from 'react';
import './intro-information.css';
import GithubLogo from './github.svg';
import LinkedinLogo from './iconmonstr-linkedin-4.svg';
import EmailLogo from './iconmonstr-email-10.svg';
import { motion } from 'framer-motion';
import { socials } from '../motion-variants/socials-variant';

export const IntroInformation = () => {
    return (
        <motion.div className="intro-information-container" 
        initial={{
            opacity: 0,
            x: '-100%'
        }}
        animate={{
            opacity:1,
            x: '0%'
        }}
        transition={{ 
            delay: 0.75
        }}
        >
            <div className="intro-information-name">Hi I'm</div>
            <div className="intro-information-box">
                <div className="intro-information-box-name">Angelo Guerrero</div>
                <div className="intro-information-box-extra">
                    <div id="dubai">Dubai</div>
                    <div className="line"></div>
                    <div className="intro-info-box-extra-desc">
                        <div>Software Developer</div>
                        <div>Traveller</div>
                        <div>Activist</div>
                    </div>
                </div>
            </div>
            <div className="intro-info-links-container">
                <motion.a href="https://github.com/Xenithz" target="_blank" rel="noopener noreferrer" variants={socials} whileHover="whileHover" whileTap="whileTap">
                    <img src={GithubLogo} alt="swag" className="logo-svg"></img>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/amcgdev/" target="_blank" rel="noopener noreferrer" variants={socials} whileHover="whileHover" whileTap="whileTap">
                    <img src={LinkedinLogo} alt="swag" className="logo-svg"></img>
                </motion.a>
                <motion.a href="mailto:amcgdev@gmail.com" target="_blank" rel="noopener noreferrer" variants={socials} whileHover="whileHover" whileTap="whileTap">
                    <img src={EmailLogo} alt="swag" className="logo-svg"></img>
                </motion.a>
            </div>
        </motion.div>
    );
}