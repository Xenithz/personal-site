import React from 'react';
import Logo from './undraw_code_thinking_1jeh.svg';
import styles from './intro-svg.module.css';
import { motion } from 'framer-motion';

export const IntroSvg = () => {
    return (
        <motion.div className={styles.introSVGContainer} 
        initial={{
            opacity: 0,
            y: '-100vh'
        }}
        animate={{
            opacity:1,
            y: '0vh'
        }}
        transition={{ 
            delay: 1
        }}
        >
            <img src={Logo} alt="swag" className={styles.introSVG}></img>
        </motion.div>
    );
}