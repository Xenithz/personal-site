import React from 'react';
import styles from './nav-header.module.css';
import HomeIcon from './iconmonstr-home-2.svg';
import pdf from './guerrero_a_resume.pdf';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navLinks } from '../motion-variants/nav-links-variant';
import { socials } from '../motion-variants/socials-variant';

export const NavHeader = () => {
    const resumeHandleClick = () => {
        window.open(pdf);
    };

    return (
        <motion.div className={styles.navWrapper} 
        initial={{
            opacity: 0,
            x: '-100vw'
        }}
        animate={{
            opacity:1,
            x: '0vw'
        }}
        transition={{ 
            delay: 0.75
        }}>
            <div className={styles.navHeader}>
                <Link to="/">
                    <motion.img src={HomeIcon} alt="swag" className={styles.homeSVG} variants={socials} whileHover="whileHover" whileTap="whileTap"></motion.img>
                </Link>
                <ul className={styles.navLinks}>
                    <Link className={styles.routerLink} to="/aboutme">
                        <motion.li className={styles.link} variants={navLinks} whileHover="whileHover" whileTap="whileTap">About Me</motion.li>
                    </Link>
                    <Link className={styles.routerLink} to="/moveandchar">
                        <motion.li className={styles.link} variants={navLinks} whileHover="whileHover" whileTap="whileTap">Movements & Charities</motion.li> 
                    </Link>
                    <div className={styles.routerLink}>
                        <motion.li className={styles.link} variants={navLinks} whileHover="whileHover" whileTap="whileTap" onClick={resumeHandleClick}>Resume</motion.li> 
                    </div>
                </ul>
            </div>
        </motion.div>
    );
}