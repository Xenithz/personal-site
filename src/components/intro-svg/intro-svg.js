import React from 'react';
import Logo from './undraw_code_thinking_1jeh.svg';
import styles from './intro-svg.module.css';
import { motion } from 'framer-motion';
import { righty } from '../motion-variants/right-content-variant';

export const IntroSvg = () => {
    return (
        <motion.div className={styles.introSVGContainer} initial="initial" animate="animate" transition={{delay: 1}} variants={righty}>
            <img src={Logo} alt="swag" className={styles.introSVG}></img>
        </motion.div>
    );
}