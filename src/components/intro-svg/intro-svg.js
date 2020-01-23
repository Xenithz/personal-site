import React from 'react';
import Logo from './undraw_code_thinking_1jeh.svg';
import styles from './intro-svg.module.css';
import { motion } from 'framer-motion';

export const IntroSvg = () => {
    return (
        <motion.div className={styles.introSVGContainer} 
        initial={{
            opacity: 0,
            y: '-100%'
        }}
        animate={{
            opacity:1,
            y: '0%'
        }}
        transition={{ 
            delay: 1
        }}
        drag
        dragConstraints={{ 
            left: 0, 
            right: 0,
            top: 0,
            bottom: 0 
        }}
        >
            <img src={Logo} alt="swag" className={styles.introSVG}></img>
        </motion.div>
    );
}